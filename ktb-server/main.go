package main

import (
	"log"
	"net/http"

	"./app"
	_ "./modules/home"
	_ "./modules/kiva"
	_ "./modules/static"
	_ "./modules/team"
)

func main() {

	http.Handle("/", app.Router)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
