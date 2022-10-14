const express = require('express')

const app = express()
const PORT = 8080

const Productos = require('./productos.json')

// Pagina principal
app.get('/', (req,res) => {
    res.send("<h1>Desafio de Servidor Express</h1> ")
})

// GET Productos
app.get('/producto', (req,res) => {
    res.send(`<h2>Todos los productos Cargados ,[${JSON.stringify(Productos)}]</h2> `)
})


// GET Productos Random
app.get('/random', (req,res) => {
    let random = Productos[Math.floor(Math.random() * Productos.length)]
    res.send(`<h2>Esto son uno de los productos Cargados</h2><br>,${JSON.stringify(random)}`)
})


// Conexion con el servidor 
const server = app.listen(PORT, () => {
    console.log(`Server funcionando [${PORT}]`);
})