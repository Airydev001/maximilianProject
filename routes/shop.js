const express = require("express");

const router = express.Router();

 const path = require("path");
const rootDir = require("../util/path")

const shopControllers = require("../controllers/shop")
router.get("/",shopControllers.getIndex);


router.get("/products",shopControllers.getProducts)

router.get("/cart", shopControllers.getCarts)

router.get("/orders", shopControllers.getOrders)

router.get("/checkout",shopControllers.getCheckout)




module.exports=router;