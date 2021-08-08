const mongoose = require('mongoose');

const busSchema=mongoose.Schema({
    name:{
        type : String,
        require: true,  
    },
    source:{
        type:String,
        require:true
    },
    destination:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
        default:100
    },
    category:{
        type:String,
        require:true
    },
    total_seats:{
        type:Number,
        default:50
    },
    remaining_seats:{
        type:Number,
        default:50
    }
});

const Bus=mongoose.model('bus',busSchema);

module.exports=Bus;
