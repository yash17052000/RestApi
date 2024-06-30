const Product= require('../model/product.js')
const Productjson=require('../products.json')

const adddata=async()=>{

await Product.create(Productjson,{unique:true})
console.log("Json");

}
const getallproducts=async(req,res)=>{
    
    let data= await Product.find({})
    res.status(200).json({data});
}




const getallproductsTesting=async(req,res)=>{
    const {company,name,sort}=req.query;
    const obj={}
    if(company)
        {
obj.company=company
        }
        if(name)
            {
    obj.name={$regex:name,$options:'i'}
            }
            let data=   Product.find(obj)
            console.log("searchable data = ",sort);
            if(sort){
                    let sortFix=sort.replace("," , " ");
                    data=data.sort(sortFix)
            }
             
    
    
    let mydata=await data.select("-eid")
   
    res.status(200).json({mydata});
}
module.exports={getallproducts,getallproductsTesting,adddata}