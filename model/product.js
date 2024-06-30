const mongoose= require('mongoose')

const ProductSchema= new mongoose.Schema({
    eid:{
type:Number,
unique:true
    },
name:{
    type:String,
    required:true
},
Price:{
    type:Number,
    required:[true,"Price must be there "]
},
feature:{
    type:Boolean,
    required:false
}
,
company:{
    type:String,
enum:{
values:["dell","apple","samsung"],
message:"don no support other comapnies "
}
}

})
module.exports=mongoose.model('Product',ProductSchema)