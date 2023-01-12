const router = require('express').Router();
const {obtenerVentas,obtenerVentasbyDoc} = require('../controller/registroVentas')
router.get('/',obtenerVentas);
router.get('/:documento_user',obtenerVentasbyDoc)

module.exports = router;