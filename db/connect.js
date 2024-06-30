require('dotenv').config();
const mongoose= require("mongoose")
url = process.env.MONGODB_URL
connectDb= ()=>{
    try {
        console.log("DB is  connected ");
        return mongoose.connect(url)
    } catch (error) {
        
    }

}
module.exports=connectDb