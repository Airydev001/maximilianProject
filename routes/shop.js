const express = require("express");

const router = express.Router();

 const path = require("path");
const rootDir = require("../util/path")

const getProductsControllers = require("../controllers/product")
router.get("/",getProductsControllers.getProducts);






module.exports=router;