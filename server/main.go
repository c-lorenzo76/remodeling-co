package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/go-sql-driver/mysql"
	"github.com/rs/cors"
	"gopkg.in/gomail.v2"
	"log"
	"net/http"
	"os"
)

const (
	smtpHost = "smtp.gmail.com"
	smtpPort = 587
	smtpUser = "cristianlorenzo682@gmail.com"
	smtpPass = "pile axsf dnma pqbv"
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

//func checkEmail(w http.ResponseWriter, r *http.Request) {
//	if r.Method != http.MethodGet {
//		http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
//		return
//	}
//
//	/*
//		I use client here to avoid having to create a whole new struct,
//		this request only has "email" but I assign it into a client struct. This is for future reference.
//	*/
//	var emailCheck client
//
//	err := json.NewDecoder(r.Body).Decode(&emailCheck)
//	if err != nil {
//		http.Error(w, err.Error(), http.StatusBadRequest)
//		return
//	}
//
//	emailExists, err := checkClientExists(emailCheck)
//	if err != nil {
//		log.Printf("Error checking client exists: %v", err)
//		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
//		return
//	}
//
//	w.Header().Set("Content-Type", "applications/json")
//
//	if err := json.NewEncoder(w).Encode(emailExists); err != nil {
//		log.Printf("Error encoding email: %v", err)
//		http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
//	}
//
//	print("email checked\n")
//
//}

func sendMail(cc string, fullName string, subject string, body string) error {

	msg := gomail.NewMessage()
	msg.SetHeader("From", smtpUser)               // should be a new NOREPLY email
	msg.SetHeader("To", "c.lorenzopav@gmail.com") // should be email of COMPANY
	msg.SetAddressHeader("Cc", cc, fullName)      // cc CLIENT name
	msg.SetHeader("Subject", subject)
	msg.SetBody("text/html", body)

	dialer := gomail.NewDialer(smtpHost, smtpPort, smtpUser, smtpPass)

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
		Addr:   "localhost:3306",
		DBName: "remodeling",
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
	mux.HandleFunc("/clients", getClients)
	mux.HandleFunc("/new-client", postClient)
	//mux.HandleFunc("/check-email", checkEmail)

	handler := cors.Default().Handler(mux)

	fmt.Println("Server running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
