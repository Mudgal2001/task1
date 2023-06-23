const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv")
app.use(express.json())
dotenv.config();
var cors = require('cors');
app.use(cors());
const testAPI = require("./routes/testAPI")
const createPost = require("./routes/createPost")
const createUser = require("./routes/users")
const PORT = process.env.PORT || 6001 ;
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected To MongoDB"));
mongoose.set('strictQuery', true);

    app.listen(PORT,()=>{
        console.log(`Server PORT:${PORT}`);
    })


app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/testAPI",testAPI)
app.use("/post",createPost)
app.use("/createUser",createUser)