const express = require('express');
const app = express();
const cors = require('cors');
const { Error } = require('mongoose');
const mongoose = require('mongoose')


//ROUTES
const product = require('./routes/Product')

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://sirsathler:Matheus140400@mulhermoderna.tzs3b.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Successfully Logged in MongoDB")
}).catch((err)=>{
    console.log("Error conecting to MongoDB! > " + err)
})


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use('/', product);

app.use('/', (req, res, next) => {
    res.status(200).send({
        Message: 'Hello World!',
    });
});

app.use('/product', product)

module.exports = app;