//enrutado de msacota
const { Router } = require('express')
const router = Router()
const {getMascota, postMascota } = require('../controllers/mascota')

router.post('/', postMascota) 
router.get('/', getMascota) 

module.exports = router;