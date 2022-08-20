

const express= require("express")
const app=express()
const path= require("path")

//  you need to include this line 
app.use(express.urlencoded({extended:true}))
// if you use json to retrive data through json in postman than you need to include it 
app.use(express.json())
app.set("views",path.join(__dirname, "views"))
app.set("view engine", "ejs")


const comments=[
    {
        username:"Todd",
        comment: 'lol that is funny'
    },
    {
        username:"skyler",
        comment: 'I like to bird watching with my dog'
    },
    {
        username:"LightYagami",
        comment: 'plz delete your account'
    },
    {
        username:"L",
        comment: 'woof woof woof'
    }

]

//  RESTful comment index 

app.get("/comments", (req, res)=>{
    res.render("comments/index", {comments})
})



app.get("/tacos", (req, res)=>{
    res.send("GET/tacos response")

})

app.post("/tacos", (req,res)=>{
    // parsing the request body 
    const {meat,qty} =req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})


app.listen(3000,()=>{
    console.log("ON PORT 3000!")
})





