const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    good: {
        type: Types.ObjectId,
        required: true,
        ref: 'Good'
    },
    things: {
        type: Number,
        default: 1
    },
    buy: {
        type: Boolean,
        default: false
    }
})
module.exports = model('Purshase', schema)