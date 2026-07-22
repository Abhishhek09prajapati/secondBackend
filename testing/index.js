const express = require('express')
const mongoose = require("express")


const app = express()

app.get("/",(req,res)=>{
    res.json("server Conntect")
})

app.listen(2000,(req,res)=>{
    console.log("connatced")
})