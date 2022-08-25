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
   res.render('shop/product-detail',{
    product:product,
    //IS still under product actually
    path:'/products',
    pageTitle:product.title,

   })
  })
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
exports.postCart =  (req,res) =>{
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect('/cart');
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