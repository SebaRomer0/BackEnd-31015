const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mensajes = [

    {id:1, body: "Esto es mensaje 1"},
    {id:2, body: "Esto es mensaje 2"},
    {id:3, body: "Esto es mensaje 3"}

]


// 1°Forma con GET
// app.get('/api/mensajes', (req,res) => { res.json(mensajes) })
// app.get('/api/mensajes-one', (req,res) => { 
//     const mensaje = mensajes.find(m => m.id == req.query.id)
//     res.json(mensaje)
// })

// 2°Forma con GET
app.get('/api/mensajes', (req,res) => {
    if (Object.entries(req.query).length > 0) {
        const mensaje = mensajes.find(m => m.id == req.query.id)
        res.json(mensaje)
    } else {
        res.json(mensajes)
    }
})

// Agregando POST
app.post('/api/mensajes', (req,res) => {
    console.log('POST Recibido')
    console.log(req.body);

    mensajes.push(req.body)

    res.json("Se agrega nuevo mensaje")

})

// Actuualizando PUT
app.put('/api/mensajes/:id', (req,res) => {
    console.log('PUT Recibido')
    console.log(req.body);

    mensajes.push(req.body)

    res.json("Actualiza nuevo mensaje" + req.params.id)

})

// Borrando DELETE
app.delete('/api/mensajes/:id', (req,res) => {
    console.log('Delete Recibido')
    console.log(req.body);

    mensajes.push(req.body)

    res.json("Borrando Mensajes" + req.params.id)

})



app.listen(8080)