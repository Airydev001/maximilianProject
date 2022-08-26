const express = require("express");
const path = require("path");
const adminController  = require("../controllers/admin")
const router = express.Router();

router.get('/add-product',adminController.getAddProducts)
/// /admin/products => GET
router.get('/products',adminController.getproducts)
 
router.get('/edit-product/:productId',adminController.getEditProducts);
router.post('/edit-product',adminController.postEditProduct);
router.post("/add-product",adminController.postAddProducts)
router.post("/delete-product",adminController.postDeleteProducts);
module.exports=router;
