const express = require('express');

const app = express();


// app.use((req, res)=>{
//     console.log("We got a new request");
   
//     res.send("<h1> this is my web page </h1>");
// })


app.get("/", (req,res)=>{
    res.send("This is the home page")
})

app.get("/r/:postID/:subreddit", (req,res)=>{
    const {postID, subreddit} =req.params;
    res.send(`<h1> Browsing the ${postID} and  viewing the  ${subreddit} subreddit </h1>`)
})





app.get("/cats", (req,res)=>{
res.send("Meow")
})

app.post("/cats",(req,res)=>{
    res.send("THis is the post route /cats. this is different than get requrest")
})



app.get("/dogs",(req,res)=>{
    res.send("Woof")
})



// put this at the bottom of the file
app.get("*", (req,res)=>{
    res.send("I don't know that path")
})


app.listen(8080,()=>{
    console.log("Listening on port 8080");
})

