const response = require('express')
const beneficiario = require('../models/beneficiario')
const Beneficiario = require('../models/beneficiario')

const getBeneficiario = async (req, res = response) =>{
  const beneficiario= await Beneficiario.find()//Consultar todos los documentos de una collection
   res.json({
    msg: 'GET API Beneficiario',
    beneficiario

   })


}

const postBeneficiario = async (req, res ) => {
    //Recibir parametros y desestructuracion
  const {idBeneficiario, idUsuario, nombres, apellidos, correo} = req.body

  //instaciar el objeto con los aprametros recibidos 
  const beneficiario = new Beneficiario({idBeneficiario, idUsuario, nombres, apellidos, correo })

  //Guardar los datos en la base de datos
  await beneficiario.save()


  res.json({
    msg: 'POST API  Beneficiario',
    idBeneficiario,
    idUsuario,
    nombres,
    apellidos,
    correo
   })

}

const deleteBeneficiario = async(req, res) => {
  //Eliminado Fisico
  const{idBeneficiario} = req.query   //Desestructuracion 
  //parametro
  //despues de los puntos son varible lo que se va a cambiar

  const beneficiario = await Beneficiario.findOneAndDelete({idBeneficiario : idBeneficiario})

  res.json({
    msg: 'Delete Api Beneficiario',
    beneficiario
  })
}

const putBeneficiario = async(req, res) =>{
  //Desestructuracion
  const {idBeneficiario, idBeneficiarioNuevo, idUsuario, nombres, apellidos, correo } = req.body
  const beneficiario = await Beneficiario.findOneAndUpdate({idBeneficiario : idBeneficiario}, {idBeneficiario: idBeneficiarioNuevo, idUsuario : idUsuario, nombres : nombres, apellidos : apellidos, correo : correo})

  res.json({
    mesg: 'Put Api Beneficiario',
    beneficiario
  })

}

const patchBeneficiario = async(req, res) =>{
  const {idBeneficiario, nombres, nombreNuevo} = req.body
  const beneficiario = await Beneficiario.findOneAndUpdate({idBeneficiario : idBeneficiario}, {nombres: nombreNuevo})

  res.json({
    mesg: 'Patch Api Beneficiario',
    beneficiario
  })
}


module.exports ={
    getBeneficiario,
    postBeneficiario,
    deleteBeneficiario,
    putBeneficiario,
    patchBeneficiario
}

