const express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("<h1>This is home home page!!!!</h1>")
})
app.get('/r/:subreddit',(req,res)=>{
    console.log(req.params)
    const {subreddit} = req.params
    res.send(`this is ${subreddit}` )
})
app.get('/cat',(req,res)=>{
    res.send("<h1>Hello kitty!</h1>")
})
app.get('/search',(req,res)=>{
    const {sea} = req.query 
    console.log(sea)
    res.send(`Hello you have searched about ${sea}`)
})
app.get('/dog',(req,res)=>{
    res.send("<h1>Hello doggy!</h1>")
})
app.get('*',(req,res)=>{
    res.send("I don't know this route")
})
app.listen(3000,()=>{
    console.log('Listenings on port 3000')
})