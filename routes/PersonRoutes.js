const express=require("express");
const router=express.Router();
const Person=require("./../models/person")

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data); // use capital 'Person'
        const response = await newPerson.save(); // fixed typo 'sava' -> 'save'
        console.log("Data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message }); // proper error response
    }
});
router.get('/',async(req,res)=>{
    try{
    const data=await Person.find();
    console.log("data Recieved");
    res.status(200).json(data);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
   
})
router.put('/:id',async(req,res)=>{
    try {
           const personId=req.params.id;
           const updatPerson=req.body;
           const response=await Person.findByIdAndUpdate(personId,updatPerson,{
            new:true,
            runValidators:true,
           });
           if(!response)
           {
            res.status(404).json({error:"person not found"});
           }
           console.log("data updated");
           res.status(200).json(response);
    } catch (err) {
         console.log(err);
        res.status(500).json({ error: err.message });
    }
})
router.delete('/:id',async(req,res)=>{
    try {
           const personId=req.params.id;
           const response=await Person.findByIdAndDelete(personId);
           if(!response)
           {
            res.status(404).json({error:"person not found"});
           }
           console.log("data deleted");
           res.status(200).json({error:"person deleted successfully"});
    } catch (err) {
         console.log(err);
        res.status(500).json({ error: err.message });
    }
})
module.exports=router;