const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Hello from my first server!')
})

app.get('/', (req,res) =>{
    res.send('More data coming sooooon')
})
app.listen(port,() =>{
    console.log(`My first server is running on port: ${port}`)
})