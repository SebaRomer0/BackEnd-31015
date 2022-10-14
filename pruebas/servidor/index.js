const http = require('http')

const server = http.createServer( (peticion, respuesta) => {
    respuesta.end('Vamos Sebita que nos estamos poniendo al dia')
} )

const connectedServer = server.listen(8080, ()=> {
    console.log(`Server runnig...`);
})