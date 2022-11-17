//enrutado de msacota
const { Router } = require('express')
const router = Router()
const {getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario } = require('../controllers/usuario')

router.post('/', postUsuario) 
router.get('/', getUsuario) 
router.delete('/', deleteUsuario) 
router.put('/', putUsuario) 
router.patch('/', patchUsuario) 

module.exports = router;