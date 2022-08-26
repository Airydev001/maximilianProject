//const Product = require('../models/product');
const Product = require('../models/product');
const Products = require('../models/product');


exports.getAddProducts = (req,res)=>{
    //res.sendFile(path.join(rootDir,"views","add-product.html"));
  res.render('admin/edit-product',{
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      edit:false,
      
  })
  };
exports.postAddProducts = (req,res)=>{
    const  {title,imageUrl,description,price}=req.body;
    //const imageUrl = req.body.imageUrl;
    //const description = req.body.description;
    //const price = req.body.price;
    //console.log(title, imageUrl, description,price);
    const product = new Products(null,title,imageUrl,description,price);
    product.save();
     console.log(product);
     res.redirect('/');
 };
 
exports.postEditProduct=(req,res)=>{
  const prodId= req.body.productId;
  const updatedTitle = req.body.title;
  console.log(updatedTitle);
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const updatedPrice = req.body.price;
  const updatedProduct = new Products (
    
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
    
  )
  updatedProduct.save();
  res.redirect('/admin/products')
  }

  exports.getproducts = (req,res)=>{
    Products.fetchAll((products)=>{
        res.render('admin/product',{
          prods:products,
          pageTitle:'Admin Products',
          path:'/admin/products',
          
       
       });
      })
  }
  exports.getEditProducts = (req,res)=>{
    //Query Parameter
    const editMode = req.query.edit
    if(!editMode){
      res.redirect("/");
    }
    const prodId = req.params.productId;
    //console.log(prodId);
    Products.findById(prodId,product =>{
if(!product){
  res.redirect('/');
}
res.render('admin/edit-product',{
  pageTitle: 'Edit Product',
  path: '/admin/edit-product',
  edit: editMode,
  product:product,
})
    })
    
    //res.sendFile(path.join(rootDir,"views","add-product.html"));
 
  };
exports.postDeleteProducts = (req,res,next)=>{
  const prodId = req.body.productId;
Product.deleteById(prodId);
res.redirect("/admin/products");
}