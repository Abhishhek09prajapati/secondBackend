const express = require("express");
const cors = require('cors')


const app = express();
app.use(cros())

app.get("/", (req, res) => {
    res.json("Hello Abhishek");
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});