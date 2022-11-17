const {Schema, model} = require('mongoose')
//schema signifa esquema de la db
const UsuariosSchema = Schema({
    
    idUsuario:{
        type: Number
    },

    idRol:{
        type: Number
    },

    documento:{
        type: Number
    },

    correo:{
        type: String
    },

    contraseña:{
        type: String
    }
})

module.exports = model('Usuario', UsuariosSchema)