const express=require('express');
const router=express.Router();

const {apisignin,apisignup,apibooking,availablebuses,apifilldetails,apipayment,apiprintticket}=require("../Controllers/apiController.js");


router.post('/signin',apisignin);
router.post('/signup',apisignup);
router.get('/booking',apibooking);
router.post('/availablebuses',availablebuses);
router.post('/filldetails',apifilldetails);
router.post('/payment',apipayment);
router.post('/printticket',apiprintticket);



module.exports=router;