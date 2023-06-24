const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req,res)=>{
   try{
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        });
        const user1 = await newUser.save();
        res.status(200).json(user1);
        //console.log(req.body);
    }catch(err){
        res.status(500).json(err);
    } 
    //console.log(req.body);
});

module.exports  = router;
