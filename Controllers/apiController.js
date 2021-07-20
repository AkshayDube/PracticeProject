var User = require('../models/User.js')
const express=require('express');
//const router=express.Router();

const apisignup=(req,res)=>{
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
    }
    let newUser = new User(user)
     console.log(newUser)
    newUser.save((err, result) => {
        if (err) console.log(err)
        else res.status(201).json({name:newUser.name})
    })
    
}

const apisignin=(req,res)=>{
    let findRecords={
        email:req.body.email,
        password:req.body.password
    }
    User.findOne(findRecords,(err,result)=>{
        if(err) console.log(err)
        else res.status(201).json({message : "LoginSuccessful"});
    })
}

module.exports={
    apisignin,
    apisignup
}