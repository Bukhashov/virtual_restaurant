const {Schema, model} = require('mongoose');

const basket = new Schema({
    candidate_id:  {type: String},
    table_number:  {type: String},
    peple:         {type: String},
    date: {
        day:        {type: String},
        month:      {type: String},
        year:       {type: String},
        hours:      {type: String},
        minutes:    {type: String},
    },
    phone:         {type: String},
});

module.exports = model('basket', basket);