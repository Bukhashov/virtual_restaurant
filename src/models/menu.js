const {Schema, model} = require('mongoose');

const menu = new Schema({
    dishes: {
        kz: {type: String},
        ru: {type: String},
        en: {type: String},
    },
    descriptions: {
        kz: {type: String},
        ru: {type: String},
        en: {type: String},
    },
    price:      {type: Number},
    structure:  {type: String},
    image:      {type: String},
    label:      {type: String}
});

module.exports = model('menu', menu);