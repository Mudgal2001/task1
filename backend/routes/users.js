const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.post("/register", async (req,res)=>{
   try{
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(req.body.password,salt);
        const newUser = new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPass,
        });
        const user1 = await newUser.save();
        res.status(200).json(user1);
        //console.log(req.body);
    }catch(err){
        res.status(500).json(err);
    } 
    //console.log(req.body);
});
 router.post("/login",async(req,res)=>{
    try{
     const user = await User.findOne({name:req.body.name});
     !user && res.status(404).json("worng credentials");
     const validated = await bcrypt.compareSync(req.body.password, user.password);
     !validated && res.status(404).json("wrong password");
     
     
        //Creating jwt token
     const  token = jwt.sign(
          { userId:user.id,email: user.email },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
     const { password,...others } = user._doc;
     res.status(200).json({user,token});
    }catch(err){
       res.status(500).json(err);
    }
 });
 router.get('/accessResource', (req, res)=>{  
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error! Token was not provided."});
    }
    //Decoding the token
    const decodedToken = jwt.verify(token,process.env.SECRET_KEY );
    res.status(200).json({success:true,data:{email:decodedToken.email}});   
})
module.exports  = router;
