const express = require("express");
const app = express();
const Person = require("./models/person"); // Model should be capitalized
const db = require("./config/db");
const Menu=require("./models/menu")

// Use built-in JSON parser
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

const menuRoutes=require("./routes/MenuRoutes")
const personRoutes=require("./routes/PersonRoutes")

app.use('/menu',menuRoutes);
app.use('/person',personRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// app.post('/person', async (req, res) => {
//     try {
//         const data = req.body;
//         const newPerson = new Person(data); // use capital 'Person'
//         const response = await newPerson.save(); // fixed typo 'sava' -> 'save'
//         console.log("Data saved");
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message }); // proper error response
//     }
// });
// app.get('/person',async(req,res)=>{
//     try{
//     const data=await Person.find();
//     console.log("data Recieved");
//     res.status(200).json(data);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({ error: err.message });
//     }
   
// })
// app.post('/menu',async(req,res)=>{
//     try {
//         const data=req.body;
//         const newMenu=new Menu(data);
//         const response=await newMenu.save();
//         console.log("data saved");
//         res.status(200).json(response);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({error:err.message});
//     }
// })
// app.get('/menu',async(req,res)=>{
//     try{
//             const menu=await Menu.find();
//             console.log("data recieved");
//             res.status(200).json(menu);
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({error:err.message});
//     }
   
// })
// app.get('/menu/:workType',async(req,res)=>{
//     try{
//             const workType=req.params.workType;
//             if(workType==100||workType==9.95)
//             {
//                        const menu=await Menu.find({price:workType});
//             console.log("data recieved");
//             res.status(200).json(menu);
//             }
//             else {
//                  console.log(err);
//         res.status(500).json({error:err.message});
//             }
             
//     }
//     catch(err)
//     {
//         console.log(err);
//         res.status(500).json({error:err.message});
//     }
   
// })

