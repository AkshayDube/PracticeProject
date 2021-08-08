const express=require("express");
const Admin=require("../models/Admin.js");
const Bus = require("../models/Bus.js");

const adminHome=async(req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    let checker=await Admin.findOne({email:email,password:password}).catch(err=>console.log(err));
    if(checker){
        res.render('adminhome');
    }
    else
        res.json({"message":"You are not Admin"});
}
const adminSignup=(req,res)=>{
    let user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }
    let newUser = new Admin(user);
     console.log(newUser)
    newUser.save((err, result) => {
        if (err) console.log(err)
        else res.status(201).json({"message":"Admin created Succesfully",name:newUser.name,email:newUser.email})
    })
    
}
const addBus=(req,res)=>{
    let bus={
        name:req.body.name,
        source:req.body.source,
        destination:req.body.destination,
        category:req.body.category,
        price:req.body.price
    }
    let newBus=new Bus(bus);
    newBus.save((err, result) => {
        if (err) console.log(err)
        else res.status(201).json({"message":"Bus created Succesfully",name:newBus.name})
    })
}

module.exports={
    adminHome,
    adminSignup,
    addBus

}
