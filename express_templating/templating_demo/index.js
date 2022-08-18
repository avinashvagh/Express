const express= require("express")

const app= express()

const path = require("path")

//setting the view directory
app.set("view enginer", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req,res)=>{
    res.render("home.ejs")
})

app.get("/cats", (req,res)=>{
    const cats= [
        "Blue", "Rocket", "Monty", "Stephanie","Winston"
    ]
    res.render("cats.ejs", {cats})
})

app.get("/r/:subreddit", (req,res)=>{
    const {subreddit} =req.params;
    res.render("subreddit.ejs", {subreddit})
})

app.get("/rand", (req,res)=>{
    const num= Math.floor(Math.random()*10)+1
    res.render("random.ejs", {rand: num})
})
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

