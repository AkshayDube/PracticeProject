const express=require('express');
const router=express.Router();

const {apisignin,apisignup}=require("../Controllers/apiController.js");


router.post('/signin',apisignin);
router.post('/signup',apisignup);

module.exports=router;