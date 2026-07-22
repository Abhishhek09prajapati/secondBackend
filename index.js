const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.json("Hello Abhishek");
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});