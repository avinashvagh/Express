

const express= require("express")
const app=express()

//  you need to include this line 
app.use(express.urlencoded({extended:true}))
// if you use json to retrive data through json in postman than you need to include it 
app.use(express.json())



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

