const express=require('express')
const router=express.Router();
const {getallproducts,getallproductsTesting, adddata}=require('../controllers/product')
router.route("/").get(getallproducts);
router.route("/testing").get(getallproductsTesting);
router.route("/add").post(adddata)

module.exports=router