const { log } = require('console')
const express = require('express')
const { RemoteSocket } = require('socket.io')
const { Router } = express
const Contenedor = require('../../contenedor/contenedor')
const ContenedorFile = require('../../contenedor/contenedorFile')

const routerProducto = Router()

// BD
const Productos = require('../../db/db.json')
const listDB = new Contenedor('listDB.json')


// Validacion Administradores
const validacionAdmin = ((req,res,next) => {
    console.log(req.headers)
    if ('admin' in req.headers) {
        next()
    } else {
        res.status(400)
        res.send("error: -2, descripcion: ruta 'x' metodo 'y' no implementada")
    }
})

// Rutas GET

// // Indico el contenido de las rutas
routerProducto.get('/',(req,res) =>{
    const mensajeInicial = 'Estos son los productos que disponemos ahora'
    res.render('producto.ejs', {Productos, mensajeInicial})
})

// Muestro segun su ID
routerProducto.get('/:id', (req,res) => {
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


// Rutas POST

// 
routerProducto.get('/almacen/formulario', (req,res) => {
    res.render('form.ejs', {Productos})
    
})


routerProducto.post('/almacen/formulario/listado',(req,res) => {    
        listDB.save(req.body)
            .then(() => res.redirect('/api/producto/almacen/formulario'))
            .catch(e => {
                console.log(e);
                res.send('Error al Guardar')
            })
})


routerProducto.get('/almacen/formulario/listado',(req,res) => {
    listDB.getData()
    .then( Productos => res.render('listado', { Productos } ))
    .catch(e => {
        console.log(e);
        res.send('<h1>No se pudo cargar los Productos</h1>')
    })
})


// Ruta PUT- Actualizar
routerProducto.put('/almacen/formulario/listado/:id',(req,res) => {
    res.send(`Se actualizo el producto ${req.params.id}`)
})


// Ruta DELETE - Borrar
routerProducto.delete('/almacen/formulario/listado/:id' , (req,res) => {
    res.send(`Se borro el Producto ${req.params.id}`)
})

module.exports = routerProducto