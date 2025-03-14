const mongoose = require('mongoose');

const Records = mongoose.model('Record', new mongoose.Schema({
    name : {type : String, required: true},
    dob : {type : String, required: true},
    email : {type : String, required: true},
    phone : {type : String, required: true},
    pic : {
       data : { type : String, required: true},
       extension : { type : String, required: true },
    }
}), 'Data');

const Login = mongoose.model('Logins', new mongoose.Schema({
    isLoggedIn : {type: Boolean, required: true},
    name : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
}), 'Login');

module.exports = { Records, Login };