
const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), 'data','cart.json' )
console.log(p);

module.exports = class Cart{
    static  addProduct(id,productPrice){
        //Fetch the previous Cart
        fs.readFile(p,(err,fileContent)=>{
            
            //console.log(typeof(fileContentString));
            let cart = {products:[],totalPrice:0}
            if(!err){
                cart =   JSON.parse(fileContent);

                console.log(cart);
            } 
            //Analyze the Cart and find the existing Product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id );
        const existingProduct = cart.products[existingProductIndex];
       let updatedProduct;
        //Add new product/ increase quantity
        if(existingProduct){
         updatedProduct = {...existingProduct} //use spread operator to updat e the [product]
         updatedProduct.qty = updatedProduct.qty + 1;
     } else {
        updatedProduct = {id:id, qty:1};
        cart.products = [...cart.products,updatedProduct];
     }
     cart.totalPrice = cart.totalPrice+ +productPrice;
     //cart.products === [...carts.products]
     console.log(cart);
     fs.writeFile(p,JSON.stringify(cart) + "", err => {
        console.log(err);
    })
    }) 
    
}
static deleteProduct(id,productPrice){
    fs.readFile(p,'utf-8',(err,fileContent)=>{
        if(err){
            //Don't do anything
          return;
        }
        const updatedCart = {...JSON.parse(fileContent)};
        console.log(updatedCart.totalPrice);
        const product = updatedCart.products.find(prod => prod.id === id);
const productQty = product.qty;
      updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
      updatedCart.totalPrice =updatedCart.totalPrice - productPrice * productQty;
        fs.writeFile(p,JSON.stringify(updatedCart), err=>{
         console.log(err);
        });
        
        
    
    });
}
}