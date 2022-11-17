const {Schema, model} = require('mongoose')
//schema signifa esquema de la db
const BeneficiariosSchema = Schema({
    
    idBeneficiario:{
        type: Number
    },

    idUsuario:{
        type: Number
    },

    nombres:{
        type: String
    },

    apellidos:{
        type: String
    },

    correo:{
        type: String
    }
})

module.exports = model('Beneficiario', BeneficiariosSchema)