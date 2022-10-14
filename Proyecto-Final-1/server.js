const { log } = require('console')
const express = require('express')
const router = express.Router()
const routerCarrito = require('./router/carrito/carrito')
const routerProducto = require('./router/producto/producto')

const app = express()
const PORT = 8080

// Configuracion Requerida para formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Configuracion de EJS
app.set('views', './views')
app.set('view engine', 'ejs')


app.use('/api/carrito', routerCarrito)
app.use('/api/producto', routerProducto)


// Escucha en el Servidor
const server = app.listen(PORT, () => {
    console.log(`Server escuchando por puerto [${PORT}]`);
})
server.on("error", error => console.log(`Error en Servidor ${error}`))