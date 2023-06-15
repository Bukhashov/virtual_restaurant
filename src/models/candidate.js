const {Schema, model} = require('mongoose');

const candidate = new Schema({
    lastname:   {type: String},
    firstname:  {type: String},
    email:      {type: String},
    password:   {type: String},
    phone:      {type: String},
    label:      {type: String}
});

module.exports = model('candidates', candidate);