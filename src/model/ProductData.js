const mongoose =require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGODB_URL)
//mongoose.connect("mongodb+srv://sebin:sebin123@cluster0.fpzpk12.mongodb.net/productDB")

//schema defenition


const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    productID:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    Description:String,
    price:Number,
    starRating:Number,
    imageURL:String
})

 //model creation

  var ProductData = mongoose.model ("products",ProductSchema);
  module.exports=ProductData;
