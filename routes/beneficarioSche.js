//enrutado de msacota
const { Router } = require('express')
const router = Router()
const {getBeneficiario, postBeneficiario, deleteBeneficiario, putBeneficiario, patchBeneficiario } = require('../controllers/beneficiario')

router.post('/', postBeneficiario) 
router.get('/', getBeneficiario) 
router.delete('/', deleteBeneficiario) 
router.put('/', putBeneficiario) 
router.patch('/', patchBeneficiario) 
module.exports = router;