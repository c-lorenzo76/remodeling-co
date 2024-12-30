package main

type HunterResponse struct {
	Data struct {
		Status string `json:"status"`
		Score  int    `json:"score"`
		Email  string `json:"email"`
	} `json:"data"`
	Error string `json:"error,omitempty"`
}
