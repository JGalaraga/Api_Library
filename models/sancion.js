const {Schema, model} = require('mongoose')
//schema signifa esquema de la db
const SancionSchema = Schema({
    
    idSancion:{
        type: Number
    },

    tipoSancion:{
        type: String
    },

    observacion:{
        type: String
    },

    estado:{
        type: String
    }
})

module.exports = model('Sancion', SancionSchema)