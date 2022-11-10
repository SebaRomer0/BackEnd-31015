const express = require('express')
const cluster = require('cluster')
const http = require('http')
const app = express()


// Consgina 1 Desafio 30

// Agrego en la linea de comandos para escuchar en 2 puertos diferentes. El primero en FORK y el Segundo en CLUSTER

// pm2 start server-pm2.js --name="Server1-fork" -- 8081
// pm2 start server-pm2.js --name="Server2-cluster" -- watch -i max -- 8082

app.get('/',(req,res) => {
    res.send('El proceso ID es ' + process.pid + process.platform)
})



// Consigna 2
// ---------------------- NGINX----------------------------
// Se copio una Configuracion "nginx.conf" para abrir los server en los distintos puertoss 8082,8083,8084,8085


const PORT = parseInt(process.argv[2]) || 8080

app.get('/data', (req, res) => {
    console.log(`port ${PORT}, ${new Date().toLocaleTimeString()}`);
    res.send(`Server express
    <span style='color:violet;'>(Nginx)</span> on ${PORT}
    <b>PID ${process.pid}</b> - ${new Date().toLocaleTimeString()}
    `)
})

app.listen(PORT, err => {
    if(err) console.log(err);

    console.log(`Server express ${PORT} - PID ${process.pid}`);
})
