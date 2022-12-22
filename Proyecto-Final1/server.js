const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db.mongo");
const session = require('express-session')
const passport = require('passport')
const routerLogin = require("./router/log/routes.log");
const routerProducto = require("./router/producto/producto");
const bookRouter = require("./router/formulario");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// SERVER CONFIG
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'sebastian123',
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 30000, secure: false, httpOnly: false }
}))


// INICIALIZAMOS PASSPORT
app.use(passport.initialize())
app.use(passport.session())

app.set('views', './views')
app.set('view engine', 'ejs')



//-------------------------- Rutas ------------------------------------


app.use('/', routerLogin)
app.use("/api", bookRouter);



// Me esta faltando poder Rutearlo en la pestaña de producto.js-----------
// app.use('/api',routerProducto)

const product = [
  {
    id: 1,
    nombre: "camisa-1",
    descripcion: "Camisa de estacion Floreada",
    codigo: 101001,
    foto: "./img/camisa1.jpeg",
    precio: 1200,
    stock: 3,
  },
  {
    id: 2,
    nombre: "camisa-2",
    descripcion: "Camisa de estacion Black/White",
    codigo: 101002,
    foto: "./img/camisa2.jpeg",
    precio: 1500,
    stock: 2,
  },
  {
    id: 3,
    nombre: "camisa-3",
    descripcion: "Camisa Ocacional Neutra",
    codigo: 101003,
    foto: "./img/camisa3.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 4,
    nombre: "pantalon-1",
    descripcion: "Pantalon color Mostaza Green",
    codigo: 101004,
    foto: "./img/pantalon1.jpg",
    precio: 7000,
    stock: 5,
  },
  {
    id: 5,
    nombre: "pantalon-2",
    descripcion: "Pantalon Neutr",
    codigo: 101005,
    foto: "./img/pantalon2.jpg",
    precio: 4000,
    stock: 6,
  },
  {
    id: 6,
    nombre: "pantalon-3",
    descripcion: "Pantalon desteñido Black/White",
    codigo: 101006,
    foto: "./img/pantalon3.jpg",
    precio: 10.0,
    stock: 3,
  },
  {
    id: 7,
    nombre: "remera-1",
    descripcion: "Remera Expire Stampa",
    codigo: 101007,
    foto: "./img/remera1.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 8,
    nombre: "remera-2",
    descripcion: "Remera Salmon",
    codigo: 101008,
    foto: "./img/remera2.jpeg",
    precio: 1000,
    stock: 5,
  },
  {
    id: 9,
    nombre: "remera-3",
    descripcion: "Remera Ocacional Black",
    codigo: 101009,
    foto: "./img/remera3.jpeg",
    precio: 1000,
    stock: 5,
  },
];

app.get("/api/carrito", (req, res) => {
  res.send(product);
});

app.post("/api/pay", (req, res) => {
  console.log(req.body);
  res.send(product);
});

app.use("/api/producto", express.static("services"));
// ---------------------------------------------------------------------------



//-------------------------- Escucha de Servidor ------------------------------------
connectDB(err => {
    if(err) return console.log('No conectado');

    app.listen(8080, () => {console.log('Listening...')})
})
