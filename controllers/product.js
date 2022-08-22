const products = [];
exports.getAddProducts = (req,res)=>{
    //res.sendFile(path.join(rootDir,"views","add-product.html"));
  res.render('add-product',{
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCss: true,
      activeAddProduct: true
  })
  };
exports.postAddProducts = (req,res)=>{
    const title = req.body.title;
    products.push({title:title});
     res.redirect('/');
 };
//logic for  the shop
exports.getProducts = (req,res)=>{
    
    //console.log(products);
  // res.sendFile(path.join(rootDir,  "views", "shop.html"));
res.render('shop',{
   prods:products,
   pageTitle:'Shop',
   path:'/',
   hasProducts:products.length > 0,
   activeShop:true,
   productCSS:true

})

}