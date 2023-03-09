const router = require('express').Router();
const {listBank, pago, rtaPago} = require('../controller/pagoPse')
router.get('/',listBank)

router.post('/',pago)
router.post('/rta',rtaPago)
module.exports = router
