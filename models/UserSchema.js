var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    cpf: {
        type: Number,
        require: true,
        unique: true,
    }
})
    
module.exports = mongoose.model('users', UserSchema);
