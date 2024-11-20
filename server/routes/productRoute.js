const express=require("express");
const route=express.Router();

const ProductController=require("../controllers/productController") ;

route.post("/productsave",ProductController.productSave);
route.get("/showproduct", ProductController.showProduct);

module.exports=route;