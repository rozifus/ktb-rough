package app

import (
	"github.com/gorilla/mux"
)

var Router = mux.NewRouter()
var subrouters = make(map[string]*mux.Router)

func GetSubrouter(prefix string) *mux.Router {
	print("GetSubrouter: ", prefix)
	if sr, ok := subrouters[prefix]; ok {
		return sr
	} else {
		nsr := Router.PathPrefix(prefix).Subrouter()
		subrouters[prefix] = nsr
		return nsr
	}
}
