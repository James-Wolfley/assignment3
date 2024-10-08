package main

import (
	"html/template"
	"io"
	"net/http"

	"github.com/labstack/echo/v4"
)

type Template struct {
    templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func Index(c echo.Context) error {
	return c.Render(http.StatusOK, "index", nil)
}

func main() {
	//Pre render the templates
	t := &Template{
    templates: template.Must(template.ParseGlob("./views/*.html")),
	}
	//Create the echo server, assign  the template reference, and register the index route
	e := echo.New()
	e.File("/output.css", "output.css")
	e.Static("/images", "images")
	e.Renderer = t
	e.GET("/", Index)
	//Start the echo server with a logger
	e.Logger.Fatal(e.Start(":8080"))
}