const express = require('express')
const Contenedor = require('./contenedor/contenedor')

const app = express()

const PORT = 8080

// // Router
// const { Router } = express
// const routerApi = Router()
  
// Configuracion Requerida para el formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Rutas EJS y Motor de Plantilla
app.set('views', './views')
app.set('view engine', 'ejs')

// Contenedor DB
const db = new Contenedor('db.json')

// Se indica la Ruta para el formulario
app.get('/', (req, res) => res.sendFile(__dirname + '/views/form.html'))

// Guardo los Datos de los Productos
app.post('/productos', (req, res) => {
    db.save(req.body)
        .then(() => res.redirect('/'))
        .catch(e => {
            console.log(e);
            res.send('Error al Guardar')
        })
})

// Renderizo los Datos en la pestaña Producto
app.get('/productos', (req, res) => {
    db.getData()
    .then( data => res.render('productos', { data } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
})


// Escucha en el Servidor
const server = app.listen(PORT, () => {
    console.log(`Server escuchando por puerto [${PORT}]`);
})
server.on("error", error => console.log(`Error en Servidor ${error}`))