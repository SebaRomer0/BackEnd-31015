const mongoose = require("mongoose");

function connectDB(cb) {
    mongoose.connect(
        'mongodb://127.0.0.1:27017/usuarios2023',
        {useNewUrlParser: true, useUnifiedTopology: true},
        err => {
            console.log(err);
            if(!err) console.log('DB conectado')
            cb(err)
        }
    )
}


module.exports = connectDB

