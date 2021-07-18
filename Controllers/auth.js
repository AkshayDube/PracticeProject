const { sign } = require('crypto');
const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=path.dirname(process.mainModule.filename);



const signinController=(req,res)=>{
return(
    //res.sendFile(path.join(rootDir,"views","signin.ejs"))
    res.render('signin')
);
}

const signupController=(req,res)=>{
    return(
        res.render('signup')
    );
}

module.exports={
    signinController,
    signupController
}
