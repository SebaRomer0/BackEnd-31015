const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const ContenedorChat = require('./models/contenedorFile')

const app = express()
// const PORT = 8080
// Motor de Plantilla EJS
app.set('views', './views')
app.set('view engine', 'ejs')
// Configuracion Requerida para el formato JSON
app.use(express.json())
app.use(express.urlencoded({extended: true}))


const dbChat = new ContenedorChat('dbChat.json')

const server = http.createServer(app)
const io = new Server(server)


app.get('/producto', (req,res) => {
    res.render('webSocket')
})


app.get('/data', (req,res) => {
    const data = dbChat.getAll()
    res.json({data})
})

io.on('connection', socket => {
    console.log('Usuarios Conectados');

    socket.on('chat-in', data => {
        const date = new Date().toLocaleTimeString()
        const dataOut = {
            userEmail: data.userEmail,
            message: data.message,
            date
        }
        // Guardar en DB
        dbChat.save(dataOut)

        console.log(dataOut)
        
        io.sockets.emit('chat-out', dataOut)
    })
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log( `Server escuchando por puerto [${PORT}]`);
})
