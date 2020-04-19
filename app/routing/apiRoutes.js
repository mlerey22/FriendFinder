const express = require("express");
const path = require("path");
const buddies = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return result.json(friends);
    })
    // post the new friends information to the array

    app.post("/api/friends", function (req, res) {
        let newFriend = request.body;
        console.log(newFriend);
        buddies.push(newFriend);
        result.json(newFriend);
    })
}