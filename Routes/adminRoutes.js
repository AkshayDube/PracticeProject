const express=require('express');
const router=express.Router();
const {adminHome,adminSignup,addBus}=require("../Controllers/adminController.js");


router.post("/home",adminHome);
router.post("/signup",adminSignup);
router.post('/addbus',addBus);
router.get('/addbus',(req,res)=>res.render('admin/addbus'));
module.exports=router;
