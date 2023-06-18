const {Schema, model} = require('mongoose');

const comment = new Schema({
    menu_id:    {type: String},
    fullname:   {type: String},
    massage:    {type: String},
});

module.exports = model('comment', comment);