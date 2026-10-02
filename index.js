const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {  
    res.send({
        message: "Server is Connected",
        name: "Node.js Server",
    });
    
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});