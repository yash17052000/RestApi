require('dotenv').config()
const express= require('express')
const router = require('./Routes/product')
const connectdb= require('./db/connect')
const app= express()

const PORT=process.env.PORT || 5000
app.get("/",(req,res)=>{
res.send("hi , i m alive")
})
app.use("/api/products",router)
const start= async()=>{

try {
    await connectdb();
    app.listen(PORT,()=>{
console.log("server is connected at ",PORT);
    })
} catch (error) {
    
}

}
start()