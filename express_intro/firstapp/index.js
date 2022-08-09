const express = require('express');

const app = express();


// app.use((req, res)=>{
//     console.log("We got a new request");
   
//     res.send("<h1> this is my web page </h1>");
// })


app.get("/", (req,res)=>{
    res.send("Welcome to the home pages!!! why dont its reflect to the browser still")
})

// app.get("/r/:postID/:subreddit", (req,res)=>{
//     const {postID, subreddit} =req.params;
//     res.send(`<h1> Browsing the ${postID} and  viewing the  ${subreddit} subreddit </h1>`)
// })





app.get("/cats", (req,res)=>{
res.send("Meow")
})

app.post("/cats",(req,res)=>{
    res.send("THis is the post route /cats. this is different than get requrest")
})



app.get("/dogs",(req,res)=>{
    res.send("Woof")
})

//working with query strings
app.get("/search", (req,res)=>{
  const{q} =req.query;
  if(!q){
    res.send("nothing found if nothing is searched")
  }
  res.send(`<h1> you searched for ${q}</h1>`)
})




// put this at the bottom of the file
app.get("*", (req,res)=>{
    res.send("I don't know that path")
})


app.listen(8080,()=>{
    console.log("Listening on port 8080");
})

