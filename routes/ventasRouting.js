const router = require('express').Router();
const {obtenerVentas,obtenerVentasbyDoc,obtenerVentasInf,obtenerVentasSup} = require('../controller/registroventas')
router.get('/',obtenerVentas);
router.get('/sup',obtenerVentasSup);
router.get('/inf',obtenerVentasInf);


router.get('/:documento_user',obtenerVentasbyDoc)


module.exports = router;