const Products = require('../models/product');


exports.getAddProducts = (req,res)=>{
    //res.sendFile(path.join(rootDir,"views","add-product.html"));
  res.render('admin/add-product',{
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCss: true,
      activeAddProduct: true
  })
  };
exports.postAddProducts = (req,res)=>{
    const  {title,imageUrl,description,price}=req.body;
    //const imageUrl = req.body.imageUrl;
    //const description = req.body.description;
    //const price = req.body.price;
    //console.log(title, imageUrl, description,price);
    const product = new Products(title,imageUrl,description,price);
    product.save();
     console.log(product);
     res.redirect('/');
 };

  exports.getproducts = (req,res)=>{
    Products.fetchAll((products)=>{
        res.render('admin/product',{
          prods:products,
          pageTitle:'Admin Products',
          path:'/admin/products',
         
       
       });
      })
  }