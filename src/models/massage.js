const {Schema, model} = require('mongoose');

const massage = new Schema({
    chat_id:   {type: String},
    massage:   {type: String},
});

module.exports = model('massage', massage);