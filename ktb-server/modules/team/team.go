package team

import (
	"../../app"
	_ "../kiva"
	"net/http"
)

type TeamList struct {
	Teams *[]string
}

type Team struct {
	Name string
}

func init() {

	teamRouter := app.GetSubrouter("/team")

	teamRouter.HandleFunc("/add", GetTeamAdd).Methods("GET")
	teamRouter.HandleFunc("/add", PostTeamAdd).Methods("POST")

	app.RegisterTemplate("addteam", "templates/addteam.html")
}

func GetTeamAdd(w http.ResponseWriter, r *http.Request) {

	app.ProcessTemplate(w, "addteam", nil)

}

func PostTeamAdd(w http.ResponseWriter, r *http.Request) {

	println(r)

}
