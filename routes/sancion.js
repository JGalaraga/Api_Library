//enrutado de msacota
const { Router } = require('express')
const router = Router()
const {getSancion, postSancion, deleteSancion, putSancion, patchSancion } = require('../controllers/sancion')

router.post('/', postSancion) 
router.get('/', getSancion) 
router.delete('/', deleteSancion) 
router.put('/', putSancion) 
router.patch('/', patchSancion) 

module.exports = router;