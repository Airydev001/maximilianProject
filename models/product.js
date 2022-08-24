const fs =require('fs');
const path = require('path');
//Creating this as a global function for accessibiity
const p =  path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json",
    );
const getProductsFromFile = (cb)=>{
    
    fs.readFile(p,'utf-8',(err,fileContent)=>{
    if(err){
        return cb([]);
    }
     return cb(JSON.parse(fileContent))
   })
}
module.exports = class Product {
    constructor(title,imageUrl,description,price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }
    save(){
     //helper functions invocation with anonymous function
        getProductsFromFile(products =>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products), (err)=>{
             console.log(err);
        })
     
       
        
    });
    }
    static fetchAll(cb){
      getProductsFromFile(cb);
       
    }
}