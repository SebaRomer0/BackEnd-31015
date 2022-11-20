const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/carrito')

const carritoShop = new mongoose.Schema({
    nombre:{type: String, require: true, max: 100},
    descripcion:{type: String, require: true, max: 100},
    codigo:{type: Number, require: true},
    precio:{type: Number, require: true},
    stock:{type: Number, require: true}

})

const CarritoModel = mongoose.model('carrito', carritoShop)

module.exports = CarritoModel


