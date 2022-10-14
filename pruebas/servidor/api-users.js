const express = require('express')

const app = express()
const users = []


// Con la peticion de GET
app.get('/api/usuarios', (req, res) =>{
    console.log('recibido')

    res.json(users)
})

app.get('/api/usuarios/new', (req,res) => {
    const name = req.query.name
    users.push({name})

    res.send('Usuario agregado')
})





app.listen(8080)