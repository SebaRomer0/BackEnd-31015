const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    name: {type: String, require: true, max: 100},
    lastname: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    username: {type: String, require: true, max: 100},
    age: {type: Number, require: true}

})

const UserModel = mongoose.model('users', userShema)

module.exports = UserModel