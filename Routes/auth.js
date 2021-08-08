const express = require('express');
const router=express.Router();

const {signinController,signupController,adminController}=require("../Controllers/auth.js");


router.get('/signin',signinController);
router.get('/signup',signupController);
router.get('/admin',adminController);
module.exports=router;