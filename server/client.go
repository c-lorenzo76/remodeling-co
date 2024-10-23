package main

// can't have lowercase name i.e(Fname, Lname, Phone, etc.)

type client struct {
	Fname   string `json:"fName"`
	Lname   string `json:"lName"`
	Phone   string `json:"phone"`
	Email   string `json:"email"`
	Address string `json:"address"`
	City    string `json:"city"`
	Zipcode string `json:"zipcode"`
	Message string `json:"message"`
}
