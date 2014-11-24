package kiva

import (
	"../../app"
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
)

var API_BASE = "https://api.kivaws.org/v1"

type TeamList struct {
	Teams *[]string
}

type Team struct {
	Name string
}

func init() {
	app.Router.HandleFunc("/testapi", HandleTestAPI)
}

func HandleTestAPI(w http.ResponseWriter, req *http.Request) {

	queries := map[string]string{"ids_only": "true"}

	body := getFromAPI(API_BASE, "/lenders/newest.json", queries)

	var pbody bytes.Buffer
	err := json.Indent(&pbody, body, "", "    ")
	if err != nil {
		log.Fatal(err)
	}

	println(pbody.String())
}

func getFromAPI(base, path string, queries map[string]string) []byte {
	u, err := url.Parse(base)
	if err != nil {
		log.Fatal(err)
	}
	u.Path = u.Path + path
	q := url.Values{}
	for k, v := range queries {
		q.Set(k, v)
	}
	u.RawQuery = q.Encode()

	res, err := http.Get(u.String())
	if err != nil {
		log.Fatal(err)
	} else if res.StatusCode != 200 {
		log.Fatal("Bad status code: ", res.StatusCode)
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}
	res.Body.Close()

	return body

}
