const {Router} = require('express');
const router = Router();
const {check} = require('express-validator');
const {validarCmapos} = require('../middelwares/validacionesExpress');
const {ValidarPass,existeMailTrue,existeMaiFalse} = require('../middelwares/validacionPersonali');
const {auth} = require('../controller/login');

router.post('/',
check('email','debe proporcionar un email valido').isEmail(),
existeMaiFalse,
validarCmapos,
auth)
module.exports = router;