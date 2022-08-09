const express= require("express")

const app= express()

const path = require("path")

//setting the view directory
app.set("view enginer", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

