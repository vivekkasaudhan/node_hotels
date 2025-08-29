const mongoose=require("mongoose");
const menuSchema=new mongoose.Schema({
    name:{
        type :String,
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    taste:{
        type:String,
        requird:true,

    },
     is_drink:{
        type:Boolean,
        requird:true,
        
    },
     ingre:{
        type:String,
         enum: ["spices", "sauce"],
        requird:true,
        
    },
    num_sales:{
        type:Number,
        requird:true,
    }
})
const Menu=mongoose.model('Menu',menuSchema);
module.exports=Menu;