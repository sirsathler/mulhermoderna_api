require('../models/UserSchema');

var mongoose = require('mongoose');
var Users = mongoose.model('users');
const jwt = require('../middlewares/jwt');

exports.Login = (req, res, next) => {
    const user = req.body.username
    const pass = req.body.password
    if (!user || !pass) {
        res.status(401).send({ error: 'Unautorizado' })
    }

    Users.find({
        username: user,
        password: pass
    }, (err, user) => {
        if (user == '') {
            res.status(401).send({ error: 'Login ou senha incorretos!' })
            return
        }
        res.status(200).send({ token: jwt.jwtTokenGenerator(user) })
    });
};