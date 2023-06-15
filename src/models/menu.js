const {Schema, model} = require('mongoose');

const menu = new Schema({
    dishes:     {type: String},
    descriptions: {
        kz: {type: String},
        en: {type: String},
        ru: {type: String},
    },
    price:      {type: String},
    structure:  {type: String},
    image:      {type: String},
    label:      {type: String}
});

module.exports = model('menu', menu);