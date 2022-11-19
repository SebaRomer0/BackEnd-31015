const express = require('express')

const app = express()
let count = 0
const PORT = process.env.PORT || 8080

app.get('/', (req,res) => {
    res.send('Mensaje desde HEROKU')
})

app.get('/count',(req,res) => {
    count++
    res.send(`Haz visitado ${count} la pagina`)
})

server = app.listen(PORT, () => {
    console.log('Server corriendo....');
})

server.on('error', e => {
    console.log(e);
})