const {Schema, model} = require('mongoose');

const chat = new Schema({
    candidate_id:   {type: String},
});

module.exports = model('chat', chat);