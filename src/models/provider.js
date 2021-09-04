const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    servico: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('provider', providerSchema)

   