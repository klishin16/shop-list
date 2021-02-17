const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    product: {
        type: Types.ObjectId,
        ref: 'Product',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
})
module.exports = model('Good', schema)