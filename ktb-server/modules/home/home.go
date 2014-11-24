package home

import (
	"../../app"
	"net/http"
)

type TeamList struct {
	Teams *[]string
}

type Team struct {
	Name *[]string
}

func init() {
	app.RegisterTemplate("home", "templates/index.html")
	app.Router.HandleFunc("/", HandleGetHome)
}

func HandleGetHome(w http.ResponseWriter, req *http.Request) {

	tl := TeamList{Teams: &[]string{"apples", "bananas", "coconuts"}}

	app.ProcessTemplate(w, "home", tl)
}
