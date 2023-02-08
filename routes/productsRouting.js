const router = require('express').Router();
const {CreatePagoDaviplata,confirmPagoDaviplata} = require('../controller/epayco')
const {
  getProducts,
  getProductsbyid,
  search,
  insertProdcut,
  updateProducts,
  deleteProduct
} = require('../controller/crudProducts')


router.get('/',getProducts);
router.get('/:codigo_prod',getProductsbyid);


router.post('/search',search);
router.post('/',insertProdcut);

router.post('/compra',CreatePagoDaviplata)
router.post('/confirmarPago',confirmPagoDaviplata)



router.put('/:codigo_prod',updateProducts);

router.delete('/:codigo_prod',
deleteProduct);

module.exports = router; 

