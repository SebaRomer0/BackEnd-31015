const express = require('express')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/pets', (req,res) =>{
    const pets = [
        {name:'Moncho', animal:'Pez', months: 12},
        {name:'Chaco', animal:'Chancho', months: 14},
        {name:'Firulais', animal:'Perro', months: 6}
    ]

    const mensaje = 'Mascostas de la clase'
    res.render('pets.ejs',{pets, mensaje})
})



app.listen(8080)