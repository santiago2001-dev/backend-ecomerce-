const router = require('express').Router();
const {listBank} = require('../controller/pagoPse')
const {CreatePagoDaviplata,confirmPagoDaviplata} = require('../controller/pagoDaviplata')
const {
  getProducts,
  getProductsbyid,
  search,
  insertProdcut,
  updateProducts,
  deleteProduct,
  categoria
} = require('../controller/crudProducts')


router.get('/',getProducts);
router.get('/:codigo_prod',getProductsbyid);

router.post('/search',search);
router.post('/',insertProdcut);

router.post('/compra',CreatePagoDaviplata)
router.post('/confirmarPago',confirmPagoDaviplata)

router.post('/categoria',categoria)

router.put('/:codigo_prod',updateProducts);

router.delete('/:codigo_prod',
deleteProduct);

module.exports = router; 

