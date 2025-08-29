const express=require("express");
const router=express.Router();
const Menu=require("./../models/menu")

router.post('/',async(req,res)=>{
    try {
        const data=req.body;
        const newMenu=new Menu(data);
        const response=await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }
})
router.get('/',async(req,res)=>{
    try{
            const menu=await Menu.find();
            console.log("data recieved");
            res.status(200).json(menu);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
   
})
router.get('/:workType',async(req,res)=>{
    try{
            const workType=req.params.workType;
            if(workType==100||workType==9.95||workType==500)
            {
                       const menu=await Menu.find({price:workType});
            console.log("data recieved");
            res.status(200).json(menu);
            }
            else {
                 console.log(err);
        res.status(500).json({error:err.message});
            }
             
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:err.message});
    }
   
})
module.exports=router;