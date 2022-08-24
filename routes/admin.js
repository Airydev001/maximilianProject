const express = require("express");
const path = require("path");
const adminController  = require("../controllers/admin")
const router = express.Router();

router.get('/add-product',adminController.getAddProducts)
/// /admin/products => GET
router.get('/products',adminController.getproducts)

router.post("/add-product",adminController.postAddProducts)

module.exports=router;
