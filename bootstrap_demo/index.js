const express= require("express")

const app= express()

const path = require("path")

const redditData= require("./data.json")

// serving static assets in Express through absolut path, it means yo can access the static assets from the root of the project
app.use(express.static(path.join(__dirname, "public")))


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

// a more complext subreddit demo by using fake data from a json file 
app.get("/r/:subreddit", (req,res)=>{
    const {subreddit} =req.params;
    const data = redditData[subreddit]
    if(data) {
    res.render("subreddit.ejs", {...data})
    }else{
        res.render("notfound.ejs", {subreddit})
    }
})

app.get("/rand", (req,res)=>{
    const num= Math.floor(Math.random()*10)+1
    res.render("random.ejs", {rand: num})
})
app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})

