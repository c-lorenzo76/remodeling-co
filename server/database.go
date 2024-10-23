package main

import (
	"database/sql"
	"fmt"
	"log"
)

var db *sql.DB

func fetchClientsFromDB() ([]client, error) {
	var clients []client
	rows, err := db.Query("SELECT fname, lname, phone, email, address, city, zipcode, message FROM clients")
	if err != nil {
		log.Printf("Error querying database: %v", err)
		return nil, fmt.Errorf("getClients: %v", err)
	}
	defer rows.Close()

	for rows.Next() {
		var cli client
		if err := rows.Scan(&cli.Fname, &cli.Lname, &cli.Phone, &cli.Email, &cli.Address, &cli.City, &cli.Zipcode, &cli.Message); err != nil {
			log.Printf("Error scanning row: %v", err)
			return nil, fmt.Errorf("getClients: %v", err)
		}
		clients = append(clients, cli)
	}
	if err := rows.Err(); err != nil {
		log.Printf("Error scanning rows: %v", err)
		return nil, fmt.Errorf("getClients: %v", err)
	}
	return clients, nil
}

func addClientToDB(cli client) (int64, error) {
	result, err := db.Exec("INSERT INTO clients (fname, lname, phone, email, address, city, zipcode, message) VALUES (?,?,?,?,?,?,?,?)",
		cli.Fname, cli.Lname, cli.Phone, cli.Email, cli.Address, cli.City, cli.Zipcode, cli.Message)
	if err != nil {
		return 0, fmt.Errorf("insertClientToDB: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("insertClientToDB: %v", err)
	}
	return id, nil
}

func checkClientExists(email string) (bool, error) {
	var exists bool

	err := db.QueryRow("SELECT EXISTS (SELECT 1 FROM clients WHERE email = ?)", email).Scan(&exists)
	if err != nil {
		return false, fmt.Errorf("checkClientExists: %v", err)
	}
	return exists, nil
}
