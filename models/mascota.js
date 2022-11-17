const {Schema, model} = require('mongoose')
//schema signifa esquema de la db
const MascotasSchema = Schema({
    nombre:{
        type: String
    },

    raza:{
        type: String
    },

    peso:{
        type: Number
    }
})

module.exports = model('Mascota', MascotasSchema)