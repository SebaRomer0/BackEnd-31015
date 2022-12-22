const { log } = require('console')
const connectDB = require('./config/db.mongo')
const express = require('express')
const router = express.Router()
const routerCarrito = require('./router/carrito/carrito')
const routerProducto = require('./router/producto/producto')
const routerLogin = require('./router/log/logeo.resgistro')
const app = express()
require('dotenv').config()
const passport = require('passport')
const session = require('express-session')


// Configuracion Requerida para formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'seba',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 30000, secure: false, httpOnly: false }
}))

// Iniciamos Passport
app.use(passport.initialize())
app.use(passport.session())

// Configuracion de EJS 
app.set('views', './views')
app.set('view engine', 'ejs')




//-------------------------- Rutas ------------------------------------

// Logeo de Rutas



app.use('/',routerLogin)
app.use('/api/carrito', routerCarrito)
app.use('/api/producto', routerProducto)




//-------------------------- Escucha de Servidor ------------------------------------

connectDB(err => {
    if(err) return console.log('No conectado');

    app.listen(8080, () => {console.log('Listening...')})
})
