const fs =require('fs');
const path = require('path');

const Cart = require('./cart');
//Creating this as a global function for accessibiity
const p =  path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json",
    );
let getProductsFromFile = (cb)=>{
    
    fs.readFile(p,'utf-8',(err,fileContent)=>{
    if(err){
        return cb([]);
    }
     return cb(JSON.parse(fileContent))
   })
}
module.exports = class Product {
    constructor(ID,title,imageUrl,description,price){
        this.ID = ID;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }
    save(){
     //helper functions invocation with anonymous function
        
     getProductsFromFile(products =>{
        
        if(this.ID){
          const existingProductIndex =  products.findIndex(prod => prod.ID === this.ID );
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex]=this;
        fs.writeFile(p,JSON.stringify(updatedProducts), (err)=>{
            console.log(err);
       });
        } else{
        this.ID = (Math.random() * 30000).toString();
        products.push(this);
        fs.writeFile(p,JSON.stringify(products), (err)=>{
             console.log(err);
        })
        
    }
     
       
        
    });
    }
    static deleteById(ID){
     getProductsFromFile( products =>{
        console.log(products);
     const product = products.find(prod => prod.ID === ID);
     
        const updatedProducts = products.filter(prod => prod.ID !== ID);
     fs.writeFile(p,JSON.stringify(updatedProducts), (err)=>{
        if(!err){
            Cart.deleteProduct(ID,product.price);
        } 
   })
     })
    }
    static fetchAll(cb){
      getProductsFromFile(cb);
       
    }
    static findById(ID,cb){
        getProductsFromFile(products =>{
            const product = products.find( p => p.ID === ID)
            cb(product)
        })
    }
} 