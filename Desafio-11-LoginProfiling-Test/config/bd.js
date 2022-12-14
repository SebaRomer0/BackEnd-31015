const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

const connectMongo = cb => {
    mongoose.connect('mongodb://127.0.0.1:27017/usuarios2022')
        .then(() => {
            console.log('DB connected!');
            cb()
        })
}

module.exports = connectMongo

