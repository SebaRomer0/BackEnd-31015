// Falta instalar el el express y Node para que corra el servidor

const express = require('express')


const app = express()
const PORT = 8080

app.get('/', (req,res) => {
    res.send({mensaje: 'Sulute a Pepe'})
})

// cambiando / indicas otra ruta y aprece otro mensaje
app.get('/pepe', (req,res) => {
    res.send({mensaje: 'Sos los mas Seba'})
})


// La conexcion server con el puerto
const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})