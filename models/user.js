var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true,
    },
    username: {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        trim : true,
    },
    dateofbirth: {
        type : Date,
        required : true,
    },
});

var user = mongoose.model('user', user_schema);
module.exports = user;