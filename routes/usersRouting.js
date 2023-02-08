const {Router} = require('express');
const {check} = require('express-validator');
const {validarCmapos} = require('../middelwares/validacionesexpress');
const {ValidarPass,existeMailTrue,existeMaiFalse} = require('../middelwares/validacionpersonali');

const {
    CreateUserClient,
    getUserbyd,
    getUsers,
    insertUser,
    updateuser,
    deleteUser} = require('../controller/crudusers');

const router = Router();

router.get('/',getUsers);
router.get('/:id',getUserbyd);


router.post('/cliente',
check('email','debe proporcionar un email valido').isEmail(),
ValidarPass,
existeMailTrue,
validarCmapos,
CreateUserClient);

router.post('/',
check('email','debe proporcionar un email valido').isEmail(),
ValidarPass,
existeMailTrue,
validarCmapos,
insertUser);

router.put('/:id',
check('email','debe proporcionar un email valido').isEmail(),
ValidarPass,
validarCmapos,
updateuser)

router.delete('/:id',
deleteUser)

module.exports = router ;