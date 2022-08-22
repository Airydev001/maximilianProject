const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path")
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use("/admin",adminRoutes);//Filtering Path
app.use(shopRoutes);

app.use((req,res,next)=>{
 res.status(404).render('404',{
    pageTitle: "Page Not Found!"
 });
})


app.listen(3500,()=>{
    console.log("Server is running on localhost 3500");
})