var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('products', ProductSchema);


