const express =require("express");
const ProductData= require("./src/model/ProductData");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
app.use(cors());

require("dotenv").config();
const port = process.env.PORT||8080;
const path=require('path');
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URL);
app.use(express.static(path.join(__dirname,'./Client/build')))




app.get('/api/products',function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE",);

    ProductData.find().then(function(product){
    res.send(products);
    })
})
app.post('/api/insert',bodyParser.json(),function(req,res){
    res.header("Access-Control-Allow-Orgin","*");
    res.header('Access-Control-Allow-Methods:GET,POST,PUT,DELETE');
    console.log(req,body);
    var product ={
        productID: req.body.product.productID,
        productName:req.body.product.productName,
        productCode:req.body.product.productCode,
        releseDate:req.body.product.releseDate,
        description:req.body.product.description,
        price:req.body.product.price,
        starRating:req.body.product.starRating,
        imgeURL:req.body.product.imgeURL
    }
    var product = new ProductData(product);
    product.save();
app.get('/*',function(req,res){
    //res.send("API responds correctly.")
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

    const connectDB = async () => {
        try {
          const conn = await mongoose.connect(process.env.MONGODB_URL);
          console.log(`MongoDB Connected: `);
        } catch (error) {
          console.log(error);
          process.exit(1);
        }
      }
    connectDB().then(() => {
        app.listen(port, () => {
            console.log("listening for requests on ",port);
        })
    })



})
app.listen(5000),()=>{
    console.log("server started...")

}