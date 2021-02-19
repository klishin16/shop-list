const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true,
        default: 'Новая корзина'
    },
    purchases: [{type: [Types.ObjectId], ref: 'Purchase'}],
    total: {
        type: Number,
        default: 0
    },
    owner: {
        type: Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
module.exports = model('Basket', schema)