const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const { emit } = require('process')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('./public'))
app.get('/', (req,res) => res.sendFile('index.html', {root:__dirname }))

io.on('connection', (socket)=> {
    socket.on('notificacion', data => {
        const time = new Date().toLocaleTimeString()
        console.log(`(${time}) ${data}`)

        io.sockets.emit('mensaje', data)

    })
})


const PORT = process.env.PORT || 8080
server.listen(PORT, ()=> console.log('Server Running...'))
