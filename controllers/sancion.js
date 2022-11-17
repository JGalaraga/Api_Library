const response = require('express')
const Sancion = require('../models/sancion')

const getSancion = async (req, res = response) =>{

  const sancion= await Sancion.find()//Consultar todos los documentos de una collection
   res.json({
   msg: 'GET API Sancion',
   sancion

   })


}

const postSancion = async (req, res ) => {
    //Recibir parametros y desestructuracion
  const {idSancion, tipoSancion, observacion, estado} = req.body

  //instaciar el objeto con los aprametros recibidos 
  const sancion = new Sancion({idSancion, tipoSancion, observacion, estado})

  //Guardar los datos en la base de datos
  await sancion.save()


  res.json({
    msg: 'POST API  Sancion',
    idSancion,
    tipoSancion,
    observacion,
    estado
   })

}

const deleteSancion = async(req, res) => {
  //Eliminado Fisico
  const{idSancion} = req.query   //Desestructuracion 
  //parametro
  //despues de los puntos son varible

  const sancion = await Sancion.findOneAndDelete({idSancion : idSancion})

  res.json({
    msg: 'Delete Api Sancion',
    sancion
  })
}


const putSancion = async(req, res) =>{
  //Desestructuracion
  const {idSancion,  idSancionNuevo, tipoSancion, observacion, estado } = req.body
  const sancion = await Sancion.findOneAndUpdate({idSancion : idSancion}, {idSancion: idSancionNuevo, tipoSancion : tipoSancion, observacion : observacion, estado: estado})

  res.json({
    mesg: 'Put Api Sancion',
    sancion
  })

}

const patchSancion = async(req, res) =>{
  const {idSancion, tipoSancion, sancionNueva} = req.body
  const sancion = await Sancion.findOneAndUpdate({idSancion : idSancion}, {tipoSancion: sancionNueva})

  res.json({
    mesg: 'Patch Api Beneficiario',
    beneficiario
  })
}

module.exports ={
    getSancion,
    postSancion,
    deleteSancion,
    putSancion,
    patchSancion
}

