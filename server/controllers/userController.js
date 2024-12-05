const UserModel= require("../models/userModel");


const customerSave=async(req, res)=>{
    const {name, address, city, pincode, mobile, proname, price}=req.body;
    await UserModel.create({

        name:name,
        address:address, 
        city: city,
        pin:pincode,
        mobile: mobile,
        product:proname,
        price:price
    })
  res.send("User Created!!!");
}

module.exports={
    customerSave
}