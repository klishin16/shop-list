const { Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    unitOfMeasure: {
        type: String,
        required: true
    },
    multiplicity: {
        type: Number,
        required: true
    },
})
module.exports = model('Product', schema)
