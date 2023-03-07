const router = require('express').Router();
const {listBank, pago} = require('../controller/pagoPse')
router.get('/',listBank)

router.post('/',pago)
module.exports = router
