const express = require('express')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const routes = require('./routes')
const connectDB = require('./db')
const Users = require('./model')
const { application, Router } = require('express')
const Contenedor = require('./contenedor/contenedor')
const http = require('http')
const { fork } = require('child_process')
const { match } = require('assert')
const res = require('express/lib/response')

const routerLogin = require('./router/logeo.resgistro')


// Configuracion para Consiga 3
let visitas = 0
const server = http.createServer()

// BD
const bd = new Contenedor('db.json')

passport.use('signup', new LocalStrategy(
    {passReqToCallback: true},
    (req, username, password, done) => {
        Users.findOne({'username': username}, (err, user) => {
            console.log(user);
            if(err) { console.log('error'); return done(err) }
            if(!user) { console.log('Usuario Existe!'); return done(null, false) }

            const newUser = { username, password, name: req.body.name }
            Users.create(newUser, (err, userWithId) => {
                if(err) return done (err);
                console.log(userWithId);
                console.log(err);
                return done (null, userWithId);
            })
        })
    }
))

passport.use('login', new LocalStrategy(
    (username, password, done) => {
        Users.findOne({username}, (err, user) => {
            if (err) return done(err)
            if(!user) return( done(null, false))

            return done(null, user)
        })
    }
))

passport.serializeUser((user, done) => {done(null, user._id)})
passport.deserializeUser((id, done) => Users.findById(id, done))


// SERVER CONFIG
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'seba',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 30000, secure: false, httpOnly: false }
}))

// INICIALIZAMOS PASSPORT
app.use(passport.initialize())
app.use(passport.session())

// Motores de Plantilla
app.set('views', './views')
app.set('view engine', 'ejs')


//-------------------------- Rutas ------------------------------------



// app.use('/',routerLogin)




// Inicio Bienvenida
app.get('/', routes.getInicio)


// Rutas Registro
app.get('/registro', routes.getSignup)
app.get('/error-registro', routes.getFailSignup)
app.post(
    '/registro',
    passport.authenticate('signup', {failureRedirect: '/error-registro'}),
    routes.postSignup
)


// Rutas Login
app.get('/login', routes.getLogin)
app.get('/error-login', routes.getFailLogin)
app.post('/login', passport.authenticate('login', {failureRedirect: '/error-login'}), routes.getLogin)






// Rutas Formulario/Productos
const product = [
    {id:"1",nombre:"Escuadra", precio:"223 $",foto:"./img/Escuadra.png"},
    {id:"2",nombre:"Calculadora", precio:"550 $",foto:"./img/Calculadora.png"},
    {id:"3",nombre:"Agenda", precio:"150 $",foto:"./img/Agenda.png"}
]

app.get('/api/producto',passport.authenticate('signup', {failureRedirect: '/error-registro'}),passport.authenticate('login', {failureRedirect: '/error-login'}), (req,res) => {
    
    req.session.usuario = req.query

    const mensaje = req.session.usuario

    res.render('producto', { mensaje, product })
})

app.post('/api/mensajes',(req,res) => {
    bd.save(req.body)
        .then(() => res.redirect('/api/producto'))
        .catch(e => {
            console.log(e);
            res.send('Error al Guardar')
        })
})

app.get('/api/mensajes', (req, res) => {
    bd.getData()
    .then( data => res.render('centro-mensajes', { data } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
})


// Desloguear
app.get('/logout', (req, res) => {
    const user = req.session.usuario
  
    req.session.destroy( err => {
        if(!err) res.render('fin-de-sesion', { user })
        else res.send({status: 'Error en la Sesion', body: err})
    })
})




// INIT SERVER
connectDB(err => {
    if(err) return console.log('No conectado');

    app.listen(8080, () => {console.log('Listening...')})
})
