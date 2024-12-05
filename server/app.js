const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const bodyParser = require('body-parser');
const adminRoute=require("./routes/adminRoute")
const productRoute=require("./routes/productRoute")
const paymentRoute=require("./routes/payment");
const userRoute=require("./routes/userRoute")

require("dotenv").config();
const PORT=process.env.PORT || 3000

app.use(cors());
// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/adminuser",adminRoute)
app.use("/product",productRoute)


app.use("/users",userRoute)



app.use("/api/payment",paymentRoute)

mongoose.connect(process.env.DBCON).then(()=>{
    console.log("Connected to MongoDB !!!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});