const express = require("express");
const path = require("path");

module.exports = function(app) {
    app.get("/survey", function(req, res) {
        result.sendFile(path.join(`${__dirname}/../public`, "survey.html"))
    })
    
    app.get("/", function(req, res) {
        result.sendFile(path.join(`${__dirname}/../public`, "home.html"));
    })
}