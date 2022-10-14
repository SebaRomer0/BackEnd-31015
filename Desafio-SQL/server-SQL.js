const express = require('express')
const ContenededorDB = require('./contenedor/contenedor_SQL')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const contenedorDB = new ContenededorDB()

app.get('/api/products', (req, res) => {
    contenedorDB.get(err => {console.log(); res.send(err)})
        .then(result => res.json(result))
})

app.post('/api/products', (req, res) => {
    contenedorDB.insert(req.body, err => {console.log(); res.send(err)})
        .then(result => res.json(result))
})


app.listen(8080)