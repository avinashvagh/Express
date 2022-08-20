

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
        id:1,
        username:"Todd",
        comment: 'lol that is funny'
    },
    {
        id:2,
        username:"skyler",
        comment: 'I like to bird watching with my dog'
    },
    {
        id:3,
        username:"LightYagami",
        comment: 'plz delete your account'
    },
    {
        id:4,
        username:"L",
        comment: 'woof woof woof'
    }

]

//  RESTful comment index 

app.get("/comments", (req, res)=>{
    res.render("comments/index", {comments})
})

app.get("/comments/new", (req,res)=>{
    res.render("comments/new")
})

// RESTFul commnets new 
app.post("/comments", (req,res)=>{
    const {username, comment}= req.body
    comments.push({username, comment})
    res.redirect("/comments")
})

app.get("/comments/:id", (req,res)=>{
    const{id} = req.params;
    const comment= comments.find(c=> c.id===parseInt(id))
    res.render("comments/show", {comment})
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





