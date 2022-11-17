const express = require("express")
const cors = require('cors')
const dbConnection = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = "/api/beneficiarios";
        this.mascotasPath = "/api/mascotas";
        this.beneficiariosPath = "/api/Beneficiario";
        this.UsuariosPath = "/api/usuarios";
        this.sancionPath = "/api/sanciones";
        this.middlewares()
        this.routes()
        this.dbConectar()
    }

//Metodo para esperar la conexion
    async dbConectar(){
        await dbConnection()
    }



    middlewares(){
        this.app.use(cors())
        this.app.use(express.static("public"))
        this.app.use(express.json())
    }

    routes(){
        // this.app.use(this.usuariosPath, require("../routes/beneficiarios"));
        this.app.use(this.mascotasPath, require("../routes/mascota"));
        this.app.use(this.beneficiariosPath, require("../routes/beneficarioSche"));
        this.app.use(this.UsuariosPath, require("../routes/usuario"));
        this.app.use(this.sancionPath, require("../routes/sancion"));
    }

    listen(){

        this.app.listen(this.port,()=>{
            console.log(`Escuchando desde ${this.port}`)
        })
    }

}

module.exports = Server