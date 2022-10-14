const express = require('express')
const app = express()
const fs = require('fs')

app.engine('sebastian', function(filePath,data,callback){
    fs.readFile(filePath, function(err, content) {
        if (err) {
            return callback(new Error(err))
        }

        const rendered = content.toString()
            .replace('#title#', `<h1>${data.title}</h1>`)
            .replace('#message#', `<p>${data.message}</p>`)

        return callback(null, rendered)
    })
})

app.set('views','./views')
app.set('view engine', 'sebastian')



app.get('/', (req,res) => res.send('OK'))

app.get('/template', (req,res) => {
    data = {
        title: 'Hola Sebastian',
        message: 'Saludos desde el template'
    }

    res.render('index', data)
})



app.listen(8080) 

