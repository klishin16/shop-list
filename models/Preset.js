const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    goods: {
        type: [{type: [Types.ObjectId], ref: 'Purchase'}]
    },
    owner: {
        type: Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
module.exports = model('Preset', schema)
