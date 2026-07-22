const express = require("express");
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        "name":"Abhishek Prajapati",
        "class":"D Pharma"
    });
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});