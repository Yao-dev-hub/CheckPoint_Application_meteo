const express = require("express")
const cors = require("cors")
const axios = require("axios")
const { title } = require("node:process")
const app = express()
app.listen(3000,()=>{console.log("Serveur demarré avec succès sur le port 3000")})

app.use(cors())
app.set("view engine","ejs")
app.set("views","pages")

app.use(express.static("public"))
app.use(express.json())


app.get("/",async(req,res)=>{
    res.render("index",{title:"Application météo"})
})

