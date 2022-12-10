const express = require('express')
const session = require('express-session')
const http = require('http')
const { Server } = require('socket.io')
const Contenedor = require('./contenedor/contenedor')
const ContenedorChat = require('./contenedor/contenedorFile')
const { faker } = require('@faker-js/faker')
const { name } = require('ejs')
const app = express()
const server = http.createServer(app)
const MongoStore = require('connect-mongo')
const { sign } = require('crypto')
const path = require('path')
const cookieParser = require('cookie-parser')




// Cookie
app.use(cookieParser())


// Configuracion de session Mongo Atlas
app.use(session({
    store: new MongoStore({ 
        mongoUrl: 'mongodb+srv://Sebas_007:Sebas_007@cluster0.736pk2j.mongodb.net/?retryWrites=true&w=majority',
        advancedOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    }),
    secret: 'jejeje',
    resave: false,
    saveUninitialized: true
}))



// Motor de Plantilla EJS
app.set('views', './views')
app.set('view engine', 'ejs')

// Configuracion Requerida para el formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ContenedorDB
const formChat = new Contenedor('dbFormChat.json')
const db = new Contenedor('db.json')
const dbChat = new ContenedorChat('dbChat.json')


// funcion de obejtos para el uso de Faker
function objetoFaker() {
    return{
        nombre: faker.name.firstName(),
        precio: faker.random.numeric(),
        foto: faker.image.image()
    }
}





// ----------------Muestra de producto del Formulario------------------

// Consigna 1 - uso de Faker
const product = [
    {id:"1",nombre:"Escuadra", precio:"223 $",foto:"./img/Escuadra.png"},
    {id:"2",nombre:"Calculadora", precio:"550 $",foto:"./img/Calculadora.png"},
    {id:"3",nombre:"Agenda", precio:"150 $",foto:"./img/Agenda.png"}
]

// Se indica la Ruta para el formulario
app.get('/', (req,res) => {
    res.render('index', {product})
})

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



// ----------------Consigna 1 - FAKER------------------

app.get('/api/producto-test', (req,res) => {

    const cant = Number(req.query.cant) || 5

    const objs = []
    for (let i = 0; i < cant; i++) {
        objs.push(objetoFaker())
    }

    res.json(objs)
})

// ----------------Consigna 2 - Centro de Mensajes------------------

app.get('/api/formulario',(req,res) => {

    req.session.usuario = req.query

    const mensaje = req.session.usuario

    res.render('formulario', { mensaje })

})

app.post('/api/mensajes',(req,res) => {
    formChat.save(req.body)
        .then(() => res.redirect('/api/formulario'))
        .catch(e => {
            console.log(e);
            res.send('Error al Guardar')
        })
})

app.get('/api/mensajes', (req, res) => {
    formChat.getData()
    .then( data => res.render('centro-mensajes', { data } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
})





// ----------------Sessiones de Usuario------------------
// Logeo
app.get('/login', (req, res) => {
    res.render('sesion')
})

// Deslogear
app.get('/logout', (req, res) => {
    const user = req.session.usuario
  
    req.session.destroy( err => {
        if(!err) res.render('fin-de-sesion', { user })
        else res.send({status: 'Error en la Sesion', body: err})
    })
})


// Escucha del Servidor

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log( `Server escuchando por puerto [${PORT}]`);
})



