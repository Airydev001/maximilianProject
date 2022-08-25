const Products = require('../models/product');

//logic for  the shop
exports.getProducts = (req,res)=>{
     Products.fetchAll((products)=>{
      res.render('shop/product-list',{
        prods:products,
        pageTitle:'All Products',
        path:'/products',
        
     
     })
     });
     
    //console.log(products);
  // res.sendFile(path.join(rootDir,  "views", "shop.html"));


}
exports.getProduct = (req,res,next) =>{
  const productId = req.params.productId;
  Products.findById(productId,(product)=>{
   console.log(product)
  })
  res.redirect("/");
}
exports.getIndex = (req,res,next)=>{
  Products.fetchAll((products)=>{
    res.render('shop/index',{
      prods:products,
      pageTitle:'Shop',
      path:'/',
     
   
   });
  })
}
exports.getCarts= (req,res)=>{
    
  Products.fetchAll((products)=>{
    res.render('shop/cart',{
      prods:products,
      pageTitle:'Shop',
      path:'/carts',
      pageTitle : 'Your Cart'
   
   });
  })


}
exports.getOrders= (req,res)=>{
    
  Products.fetchAll((products)=>{
    res.render('shop/order',{
      prods:products,
      
      path:'/carts',
      pageTitle : 'Your Cart'
   
   });
  })


}

exports.getCheckout =(req,res,next)=>{
  res.render('shop/checkout',{
    path:'/checkout',
    pageTitle: 'Checkout'
  })
}