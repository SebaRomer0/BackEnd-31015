// Servidor GET,POST,PUT Y DELETE

const express = require('express')

// Configuracion JSON
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const frase = "Frase inicial"
const agregado = []



//Item 1 

app.get('/api/frase', (req,res) => {
    res.json( frase )
})

// Item 2

app.get('/api/palabras/:pos', (req,res) => {
    let numero = Number(req.params.pos)

    numero--
    res.json({"La letra es, segun el numero #": frase[numero]})
})

// item 3

app.post('/api/palabras', (req,res) => {
    console.log('Palabra que se va agregar');
    console.log(req.body)

    // Palabra agregada
    agregado.push(frase + req.body.palabra)
    console.log(agregado)

    res.json({'Se agrego nuevo mensaje': agregado})
})










// Server en escucha
app.listen(8080)