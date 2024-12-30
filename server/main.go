package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/rs/cors"
	"gopkg.in/gomail.v2"
	"io"
	"log"
	"net/http"
	"os"
)

func getClients(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
		return
	}

	clients, err := fetchClientsFromDB()
	if err != nil {
		log.Printf("Error fetching clients: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")

	if err := json.NewEncoder(w).Encode(clients); err != nil {
		log.Printf("Error encoding clients: %v", err)
		http.Error(w, fmt.Sprintf("getClients: %v", err), http.StatusInternalServerError)
	}
	print("clients retrieved\n")
}

func verifyEmail(email string) (bool, error) {
	emailToken := os.Getenv("huntKey")
	url := fmt.Sprintf("https://api.hunter.io/v2/email-verifier?email=%s&api_key=%s", email, emailToken)

	// Failed to send the message. Please try again.
	resp, err := http.Get(url)
	if err != nil {
		log.Printf("failed to make the request: %v", err)
		return false, nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("returned status code: %v", resp.Status)
		return false, nil
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Printf("failed to read response body: %v", err)
		return false, nil
	}

	var result HunterResponse
	if err := json.Unmarshal(body, &result); err != nil {
		log.Printf("failed to parse JSON: %v", err)
		return false, nil
	}

	if result.Error != "" {
		log.Printf("Hunter API error: %s", result.Error)
		return false, nil
	}

	if (result.Data.Status == "valid" || result.Data.Status == "accept_all") && result.Data.Score > 40 {
		return true, nil
	}

	return false, nil
}

func postClient(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	var newClient client
	err := json.NewDecoder(r.Body).Decode(&newClient)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if newClient.Fname == "" || newClient.Lname == "" || newClient.Phone == "" ||
		newClient.Email == "" || newClient.Address == "" || newClient.City == "" || newClient.Zipcode == "" {
		http.Error(w, "All fields are required", http.StatusBadRequest)
		return
	}

	// Checks to see if the email is real
	// this error is for the api request
	isValid, err := verifyEmail(newClient.Email)
	if err != nil {
		log.Printf("Error verifying email: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	// this error is if the email is actually valid
	if !isValid {
		http.Error(w, "Invalid email address", http.StatusBadRequest)
		return
	}

	// Checks to see if the email exists in the database
	emailExists, err := checkClientExists(newClient.Email)
	if err != nil {
		log.Printf("Error checking if client exists: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	if emailExists {
		http.Error(w, "Client with this email already sent a request for a quote", http.StatusConflict)
		return
	}

	// concurrency ; does not wait for the email to finish sending
	// improves speed, but I'm not sure how to make sure to send the email if it fails to send
	go func() {
		fullName := fmt.Sprintf("%s %s", newClient.Fname, newClient.Lname)
		subject := fmt.Sprintf("Request for Quote - %s Inquiry", fullName)
		body := fmt.Sprintf("<p><strong>Flores and Sons Remodeling</strong>, </p>"+
			"<p>A new request for a potential project.</p>"+
			"<p>Name: <strong>%s</strong></p> "+"<p>Email: <strong>%s</strong></p>"+"<p>Phone: <strong>%s</strong></p>"+
			"<p>Details about the project: <strong>%s</strong></p>", fullName, newClient.Email, newClient.Phone, newClient.Message)

		if err := sendMail(newClient.Email, fullName, subject, body); err != nil {
			log.Printf("Error sending mail: %v", err)
		}
	}()

	clientId, err := addClientToDB(newClient)
	if err != nil {
		log.Printf("Error adding client to DB: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(clientId); err != nil {
		log.Printf("Error encoding clientID: %v", err)
		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
	}

	print("client posted\n")

}

func sendMail(cc string, fullName string, subject string, body string) error {

	dialer := gomail.Dialer{
		Host:     os.Getenv("SMTP_HOST"),
		Port:     587,
		Username: os.Getenv("SMTP_USER"),
		Password: os.Getenv("SMTP_PASS"),
	}

	msg := gomail.NewMessage()
	msg.SetHeader("From", dialer.Username)        // should be a new NOREPLY email
	msg.SetHeader("To", "c.lorenzopav@gmail.com") // should be email of COMPANY
	msg.SetAddressHeader("Cc", cc, fullName)      // cc CLIENT name
	msg.SetHeader("Subject", subject)
	msg.SetBody("text/html", body)

	if err := dialer.DialAndSend(msg); err != nil {
		return fmt.Errorf("error sending email: %v", err)
	}

	return nil
}

func main() {

	cfg := mysql.Config{
		User:   os.Getenv("DBUSER"),
		Passwd: os.Getenv("DBPASS"),
		Net:    "tcp",
		Addr:   os.Getenv("DBADDR"),
		DBName: os.Getenv("DBNAME"),
	}

	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}
	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}

	fmt.Println("Connected!")

	mux := http.NewServeMux()
	mux.HandleFunc("/api/clients", getClients)
	mux.HandleFunc("/api/new-client", postClient)

	// "http://localhost:5173"
	corsOptions := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://44.195.52.72", "http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type"},
		AllowCredentials: true,
	})
	handler := corsOptions.Handler(mux)

	fmt.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe("0.0.0.0:8080", handler))
}
