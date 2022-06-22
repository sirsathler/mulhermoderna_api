var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('users', UserSchema);


