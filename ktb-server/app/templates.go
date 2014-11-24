package app

import (
	ht "html/template"
	"net/http"
)

var Templates = make(map[string]*ht.Template)
var layout = "templates/layout.html"
var nav = "templates/nav.html"

func RegisterTemplate(name, tpl string) {
	println("RegisterT:", name)
	Templates[name] = ht.Must(ht.ParseFiles(layout, nav, tpl))
}

func ProcessTemplate(w http.ResponseWriter, name string, data interface{}) {
	println("ProcessT:", name)
	if t, ok := Templates[name]; ok {
		t.Execute(w, data)
	}
}
