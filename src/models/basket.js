const {Schema, model} = require('mongoose');

const basket = new Schema({
    candidate_id:  {type: String},
    menu_id:       {type: String},
    count:         {type: Number},
    
});

module.exports = model('basket', basket);