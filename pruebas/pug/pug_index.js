const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'pug')


app.get('/', (req,res) =>{
    res.render('hello.pug', {msn: 'Saludos a todos'})
})

app.get('/datos', (req,res) => {
    res.render('datos.pug', {
        title: req.query.title,
        min: req.query.min,
        max: req.query.max,
        level: req.query.level
    })
})





app.get('/test', (req, res) =>{ res.send('OK')})

app.listen(8080)