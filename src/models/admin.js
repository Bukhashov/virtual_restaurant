const {Schema, model} = require('mongoose');

const admin = new Schema({
    lastname:   {type: String},
    firstname:  {type: String},
    email:      {type: String},
    password:   {type: String},
});

module.exports = model('admin', admin);