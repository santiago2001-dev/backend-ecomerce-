const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {validarCmapos} = require('../middelwares/validacionesexpress');
const {ValidarPass,existeMailTrue,existeMaiFalse} = require('../middelwares/validacionpersonali');
const {auth} = require('../controller/login');

router.post('/',
check('email','debe proporcionar un email valido').isEmail(),
existeMaiFalse,
validarCmapos,
auth)
module.exports = router;