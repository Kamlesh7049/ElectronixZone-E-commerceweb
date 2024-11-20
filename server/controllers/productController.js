const ProductModel=require("../models/productModel");


const productSave=async(req,res)=>{
    const {name, description, product, price, image}= req.body;
        // console.log(name, description, product, price,image);........
        // console.log(req.body);{ }
        // res.send("ok");
       
    const Product =await ProductModel.create({
    name:name,
    description:description, 
    product:product,
    price:price, 
    image: image 
    })  
     res.send (Product) ;
}

const showProduct =async(req,res)=>{
    const data=await ProductModel.find();
    // console.log(data)
    // res.send(data);
}


module.exports={
    productSave ,
    showProduct
}