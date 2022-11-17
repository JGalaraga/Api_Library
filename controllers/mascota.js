const response = require('express')
const Mascota = require('../models/mascota')

const getMascota = async (req, res = response) =>{
  //  const {nombre, raza, peso} = req.query
  const mascotas= await Mascota.find()//Consultar todos los documentos de una collection
   res.json({
    msg: 'GET API Mascota',
    mascotas
    // nombre,
    // raza,
    // peso
   })


}

const postMascota = async (req, res ) => {
    //Recibir parametros y desestructuracion
  const {nombre, raza, peso} = req.body

  //instaciar el objeto con los aprametros recibidos 
  const mascota = new Mascota({nombre, raza, peso})

  //Guardar los datos en la base de datos
  await mascota.save()


  res.json({
    msg: 'POST API  Mascota',
    nombre,
    raza,
    peso
   })

}
module.exports ={
    getMascota,
    postMascota
}

