const express= require("express")

const app= express()



app.set("view enginer", "ejs")

app.get("/", (req,res)=>{
    res.render("Home.ejs")
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})
