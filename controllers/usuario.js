const response = require('express')
const Usuario = require('../models/usuario')

const getUsuario = async (req, res = response) =>{
  //  const {nombre, raza, peso} = req.query
  const usuario= await Usuario.find()//Consultar todos los documentos de una collection
   res.json({
    msg: 'GET API Usuario',
    usuario
    // nombre,
    // raza,
    // peso
   })


}

const postUsuario = async (req, res ) => {
    //Recibir parametros y desestructuracion
  const {idUsuario, idRol, documento, correo, contraseña} = req.body

  //instaciar el objeto con los aprametros recibidos 
  const usuario = new Usuario({idUsuario, idRol, documento, correo, contraseña})

  //Guardar los datos en la base de datos
  await usuario.save()


  res.json({
    msg: 'POST API  Usuario',
    idUsuario,
    idRol,
    documento,
    correo,
    contraseña
   })

}

const deleteUsuario = async(req, res) => {
  //Eliminado Fisico
  const{idUsuario} = req.query   //Desestructuracion 
  //parametro
  //despues de los puntos son varible

  const usuario = await Usuario.findOneAndDelete({idUsuario : idUsuario})

  res.json({
    msg: 'Delete Api Usuario',
    usuario
  })
}

const putUsuario = async(req, res) =>{
  //Desestructuracion
  const {idUsuario, idUsuarioNuevo, idRol, documento, correo, contraseña } = req.body
  const usuario = await Usuario.findOneAndUpdate({idUsuario : idUsuario}, {idBeneficiario: idUsuarioNuevo, idRol : idRol, documento : documento, correo : correo, contraseña : contraseña})

  res.json({
    mesg: 'Put Api Usuario',
    usuario
  })

}

const patchUsuario = async(req, res) =>{
  const {idUsuario, correo, correoNuevo} = req.body
  const usuario = await Usuario.findOneAndUpdate({idUsuario : idUsuario}, {correo: correoNuevo})

  res.json({
    mesg: 'Patch Api Usuario',
    usuario
  })
}

module.exports ={
    getUsuario,
    postUsuario,
    deleteUsuario,
    putUsuario,
    patchUsuario
}

