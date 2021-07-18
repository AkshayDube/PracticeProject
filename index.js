const express = require('express');
const bodyParser=require('body-parser');
const path=require('path');
const authRoutes=require("./Routes/auth.js");


const rootDir=path.dirname(process.mainModule.filename);


const app=express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'Public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(authRoutes);


app.get("/",(req,res)=>{
//res.sendFile(path.join(rootDir,"views","hello.html"));
res.render('hello');
})

app.listen(3005,()=>console.log("Server is running on Port 3005"));


