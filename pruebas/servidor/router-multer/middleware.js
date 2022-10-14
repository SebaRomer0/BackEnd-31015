const express = require('express')
const app = express()


app.use( (req,res,next) => {
    console.log('time: ', new Date().toLocaleTimeString());
    next()
})

app.get('/',(req,res) => {
    res.send('OK')
})

app.get('/ok',(req,res) => {
    res.send('OK OK')
})





app.listen (8080)


