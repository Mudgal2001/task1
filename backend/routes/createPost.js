
const router  = require("express").Router();

router.post("/create",async (req,res)=>{
    res.send("post request");
})

router.get("/find",(req,res)=>{
    res.send("get request");
})

router.put("/user",(req,res)=>{
    res.send("user updated");
})

router.delete("/userD",(req,res)=>{
    res.send("user deleted");
})

module.exports = router;