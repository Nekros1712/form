const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    radio: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    uploadedAt:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Response',formSchema)
