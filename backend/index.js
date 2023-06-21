const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv")
app.use(express.json())
dotenv.config();
var cors = require('cors');
app.use(cors());
const testAPI = require("./routes/testAPI")
const PORT = process.env.PORT || 6001 ;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server PORT:${PORT}`);
    })
}).catch((err)=>console.log(`${err} did not connect`));

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/testAPI",testAPI)