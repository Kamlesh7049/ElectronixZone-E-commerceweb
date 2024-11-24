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
    res.send(data);
}
const productDetail=async(req,res)=>{
    const Data=await ProductModel.findById(req.body.id);
    res.send(Data);
}

const showOneProduct=async(req,res)=>{
    const {product}=req.query;
    const data=await ProductModel.find({product:product});
    res.send(data);
}


module.exports={
    productSave ,
    showProduct,
    productDetail,
    showOneProduct
}