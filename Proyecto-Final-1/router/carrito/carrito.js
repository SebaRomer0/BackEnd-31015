const express = require('express')
const { send } = require('process')
const { Router } = express
const Contenedor = require('../../contenedor/contenedor')
const ContenedorFile = require('../../contenedor/contenedorFile')

const routerCarrito = Router()
const Productos = require('../../db/db.json')
const carritoBD = new Contenedor('carritoBD.json')


// Indico las rutas
//Muestra del Carrito de Compra  

routerCarrito.get('/', (req,res) =>{
    res.render('carrito', { Productos })
})


routerCarrito.post('/compra',(req,res) =>{

    const data = Productos.find((p) => p.id === req.body.id)

    if (data){
        res.send("El producto ya cuenta con ese ID")
        res.json(data)
        res.redirect('/api/carrito')
    } else {
        Productos.push(req.body)
        // res.render('carrito', { Productos })
        carritoBD.save(req.body)
        .then(() => res.redirect('/api/carrito'))
        .catch(e => {
            console.log(e);
            res.send('Error al Guardar')
        })
    }

})

routerCarrito.get('/compra', (req,res) =>{
    carritoBD.getData()
    .then( carritoBD => res.render('compra', { carritoBD } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
})

// rutas del DELETE

routerCarrito.delete('/compra/:id/productos/:id_prod' ,(req,res) => {
    res.send(`Eliminando Producto del Carrito con numero de ID: ${req.params.id}`)
})

routerCarrito.delete('/compra',(req,res) => {
    res.send('Se borro todo el contenido')
})



module.exports = routerCarrito