require('../models/UserSchema');

var mongoose = require('mongoose');
var user = mongoose.model('users');
const jwt = require('../middlewares/JWT');

exports.login = (req, res, next) => {
    const usern = req.body.username
    const pass = req.body.password
    if (!user || !pass) {
        res.status(401).send({ error: 'Unautorizado' })
    }

    user.find({
        username: usern,
        password: pass
    }, (err, user) => {
        if (user == '') {
            res.status(401).send({ error: 'Login ou senha incorretos!' })
            return
        }
        res.status(200).send({ token: jwt.jwtTokenGenerator(user) })
    });
};

exports.register = (req, res, next) => {
    const usern = req.body.username
    const pass = req.body.password
    const cpf = req.body.cpf
    const email = req.body.email

    if (!checkIfUsernameExists(usern)) {
        res.status(401).send({ error: 'Usuário já cadastrado!' })
        return;
    }
    if (!checkIfEmailExists(email)) {
        res.status(401).send({ error: 'Email já cadastrado!' })
        return;
    }

    var newUser = new user({
        username: usern,
        password: pass,
        email: email,
        cpf: cpf
    });
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json(user);
        return;
    });
}

function checkIfUsernameExists(username) {
    user.find({
        username: username
    }, (err, user) => {
        if (user == '') {
            return false;
        }
    })
    return true
}

function checkIfEmailExists(email) {
    user.find({
        email: email
    }, (err, user) => {
        if (user == '') {
            return false;
        }
    })
    return true
}