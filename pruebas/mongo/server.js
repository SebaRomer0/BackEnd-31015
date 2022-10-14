const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/testing')
console.log('Conectado')

// // Creamos el modelo de los documentos de mongo
// const cat = mongoose.model('Cat', {
//     name: String,
//     age: Number
// })

// // Creamos el Documento
// const kitty = new cat({name: 'Niki', age: 18})

// // Guardamos el documento en Mongo
// kitty.save()
//     .then(() => console.log('Save ok'))
//     .catch(e => console.log('Error:',e))