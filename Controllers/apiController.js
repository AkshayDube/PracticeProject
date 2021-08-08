var User = require('../models/User.js')
var Bus = require('../models/Bus.js')

const express=require('express');
const router=express.Router();

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

const apisignin=async (req,res)=>{
    var email=req.body.email;
    var password=req.body.password;
    User.findOne({email:email,password:password})
    .then(product=>{
        if(product){
            res.render("welcome",{username:"Welcome "+product.name});
        }
        else res.json({"message":"no user found"}); 
    })
    .catch(err=>console.log(err));
}
const apibooking=(req,res)=>{
    res.render("booking");
}
const availablebuses=async(req,res)=>{
    var source=req.body.source;
    var destination=req.body.destination;
    var availablebuses=await Bus.find({source:source,destination:destination}).catch(err=>console.log(err));
    console.log(availablebuses);
    res.render('availabebus',{availablebuses:availablebuses});
    /*var buses=Bus.find({});*/
}
const apifilldetails=(req,res)=>{
    res.render('filldetails',{name:req.body.name,source:req.body.source,destination:req.body.destination,category:req.body.category,price:req.body.price});
}

const apipayment=(req,res)=>{

    res.render("payment",{source:req.body.source,destination:req.body.destination,category:req.body.category,name:req.body.name,adult:req.body.adult,kids:req.body.kids,price:req.body.price});
}
const apiprintticket=(req,res)=>{
    var total_price=((req.body.adult*req.body.price)+(req.body.kids*req.body.price*0.5));
    var obj={
        total_price:total_price,
        source:req.body.source,
        destination:req.body.destination,
        category:req.body.category,
        name:req.body.name,
        adult:req.body.adult,
        kids:req.body.kids,
        price:req.body.price
    }
    console.log(obj);
    res.render("printticket",{total_price:total_price,source:req.body.source,destination:req.body.destination,category:req.body.category,name:req.body.name,adult:req.body.adult,kids:req.body.kids,price:req.body.price});
}


module.exports={
    apisignin,
    apisignup,
    apibooking,
    availablebuses,
    apifilldetails,
    apipayment,
    apiprintticket
}