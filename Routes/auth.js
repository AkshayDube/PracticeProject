const express = require('express');
const router=express.Router();

const {signinController,signupController}=require("../Controllers/auth.js");


router.get('/signin',signinController);
router.get('/signup',signupController);
module.exports=router;