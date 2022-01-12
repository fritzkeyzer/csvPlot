package main

import (
	"log"
	"net/http"
	"os/exec"
)

func main() {

	var url = "http://localhost:8080/plot.html"

	// open browser to http://localhost:8080/plot.html
	err := exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	if err != nil {
		log.Fatalln(err)
	}

	http.Handle("/", cors(http.FileServer(http.Dir("."))))

	log.Println("Starting file server @ http://localhost:8080")
	log.Println("Open http://localhost:8080/plot.html in your browser")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func cors(fs http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// add CORS header
		w.Header().Set("Access-Control-Allow-Origin", "*")

		// serve file
		fs.ServeHTTP(w, r)
	}
}
