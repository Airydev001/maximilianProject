const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];
router.get('/add-product',(req,res)=>{
  //res.sendFile(path.join(rootDir,"views","add-product.html"));
res.render('add-product',{
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCss: true,
    activeAddProduct: true
})
})
router.post("/add-product",(req,res)=>{
   const title = req.body.title;
   products.push({title:title});
    res.redirect('/');
})

exports.routes=router;
exports.products = products;