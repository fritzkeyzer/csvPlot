package main

import (
	"log"
	"net/http"
	"os/exec"
)

func main() {

	log.Println("Starting server")

	var url = "http://127.0.0.1:8080/plot.html"

	err := exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	if err != nil {
		log.Fatalln(err)
	}

	http.Handle("/", cors(http.FileServer(http.Dir("."))))

	log.Printf("localhost:8080/plot.html\n")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func cors(fs http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// do your cors stuff
		// return if you do not want the FileServer handle a specific request
		w.Header().Set("Access-Control-Allow-Origin", "*")

		fs.ServeHTTP(w, r)
	}
}
