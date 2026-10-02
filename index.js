const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {  
    res.send(req.body);
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});