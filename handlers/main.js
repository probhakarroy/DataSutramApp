var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

//local libraries
var credentials = require('../lib/credentials.js');

//Models
var user = require('../models/user.js');


exports.signup = (req, res) => {
    var new_user = new user({
        name: req.body.name,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        dateofbirth: new Date(req.body.dateofbirth),
    });

    new_user.save((err, new_user) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ id: new_user._id });
    });
}

exports.login = (req, res) => {
    user.findOne({ username: req.body.username }, (err, user_info) => {
        if (err) return res.status(500).json({ error: err });
        if (bcrypt.compareSync(req.body.password, user_info.password)) {
            var token = jwt.sign({ id: user_info._id }, credentials.token_secret, { expiresIn: '3h' });
            res.json({ token: token });
        } else {
            res.status(404).json({ error: 'Invalid Username/Password' });
        }
    });
}
