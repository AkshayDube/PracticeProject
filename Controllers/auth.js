const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=path.dirname(process.mainModule.filename);



const signinController=(req,res)=>{
    //console.log(rootDir);
return(
    res.sendFile(path.join(rootDir,"views","login.html"))
    
);
}

const signupController=(req,res)=>{
    return(
        res.send("<h1>Welcome to SIGNUP Page BAlle Balle</h1>")
    );
}

module.exports={
    signinController,
    signupController
}
