const express = require('express')

const app = express()
const PORT = 8080
// Router
const { Router } = express
const routerApi = Router()


// Configuracion Requerida para formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Base de Datos de Productos
const Productos = require('./productos.json')


//GET Muestra de los productos
routerApi.get('/', (req,res) => {
    // res.send(JSON.stringify(Productos))
    res.json(Productos)
})

//GET Muestra de los productos segun su ID
routerApi.get('/:id', (req,res) => {
    let numero = Number(req.params.id)

    if (isNaN(numero)) {
        res.status(400)
        res.json({error: 'El ID no es un numero'})

        return 
    }
    if (numero > Productos.length || numero === 0) {
        res.status(404)
        res.json({error: 'El ID no existe'})

        return
    }

    numero--
    res.json(Productos[numero])
    
})

//POST Agrega y lo devuelve con su ID asignado

routerApi.post('/', (req,res) => {

    const data = Productos.find((p) => p.id === req.body.id)

    if (data){
        res.send("El producto ya cuenta con ese ID");
        res.json(data)
    } else {
        Productos.push(req.body)
        res.send("Productos cargados")
    }

})

// PUT recibe y actualiza

routerApi.put('/:id', (req,res) => {
    res.send("El producto a actualizar es " + req.params.id)
})


// DELETE Borra los mensajes

routerApi.delete('/:id', (req,res) => {

    console.log('Delete recibido')

    res.json("Borrando producto ")

})


app.use('/api/productos', routerApi)


// Escucha en el Servidor
const server = app.listen(PORT, () => {
    console.log(`Server escuchando por puerto [${PORT}]`);
})
server.on("error", error => console.log(`Error en Servidor ${error}`))