const express = require("express");
const app = express();

app.get("/getBook", function (req, res) {
    // additional logic
    res.send("return book");
})

app.post("/createBook", function (req, res) {
    // additional logic
    res.send("book created");
})