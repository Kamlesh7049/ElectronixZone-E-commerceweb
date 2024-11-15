const AdminModel=require("../models/adminModel");



const adminDataCheck=async(req,res)=>{
    const {user,password}=req.body;
    console.log(user,password);
}


module.exports={
    adminDataCheck
}