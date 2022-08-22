const express = require("express");

const router = express.Router();

 const path = require("path");
const rootDir = require("../util/path")
const adminData = require("../routes/admin");
router.get("/",(req,res)=>{
     const products = adminData.products;
     console.log(products);
   // res.sendFile(path.join(rootDir,  "views", "shop.html"));
res.render('shop',{
    prods:products,
    pageTitle:'Shop',
    path:'/',
    hasProducts:products.length > 0,
    activeShop:true,
    productCSS:true

})

})






module.exports=router;