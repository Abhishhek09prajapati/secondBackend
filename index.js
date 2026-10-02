const express = require("express");
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
   var a = res.json({
        "name": "Abhishek Prajapati",
        "class": "D Pharma"
    });

    res.send(a);
});

app.listen(2000, () => {
    console.log("Server is Connected on Port 2000");
});