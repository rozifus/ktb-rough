package static

import (
	"../../app"
	"net/http"
)

func init() {

	staticServer := http.StripPrefix("/static/", http.FileServer(http.Dir("static")))
	app.Router.PathPrefix("/static/").Handler(staticServer)

}
