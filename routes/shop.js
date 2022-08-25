const express = require("express");

const router = express.Router();

 const path = require("path");
const rootDir = require("../util/path")

const shopControllers = require("../controllers/shop")
router.get("/",shopControllers.getIndex);


router.get("/products",shopControllers.getProducts)

router.get("/products/:productId",shopControllers.getProduct)
router.get("/cart", shopControllers.getCarts)

router.post("/cart", shopControllers.postCart );
router.get("/orders", shopControllers.getOrders)

router.get("/checkout",shopControllers.getCheckout)




module.exports=router;