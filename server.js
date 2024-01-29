const express = require('express');
// const mongoose = require('mongoose');
const User = require('./models/User');
const dbConection=require("./config/dbConnection")
var bodyParser = require('body-parser')

dbConection();

const app = express();
app.use(express.json());
app.use(bodyParser.json())
const port = process.env.port ||5000

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// GET :  RETURN ALL USERS 

app.get("/user",async(req,res)=> {
    try {
        const allUser=await User.find()
        res.status(200).json(allUser)
    } 
    
    catch (error) {
        console.log(error.message)
    }
})
//       POST :  ADD A NEW USER TO THE DATABASE 

app.post("/user",async(req,res)=> {
    try {
    const userData=req.body
    const data = await User.create(userData)
    res.status(200).json({message:"user created",data:data})
    } 
    
    catch (error) {
        console.log(error.message)
    }
})
// PUT : EDIT A USER BY ID 


app.put("/user/:id",async(req,res)=> {
    const userId=req.params.id
    try {
    const userData=req.body
    const resl= await User.findOneAndUpdate({_id:userId},userData,{new:true})
    res.status(200).json({message:"user updated",data:resl})
    } 
    
    catch (error) {
        console.log(error.message)
    }
})
//       DELETE : REMOVE A USER BY ID 

app.delete("/user/:id",async(req,res)=> {
    const userId=req.params.id
    try {
    const userData=req.body
    const resl= await User.findOneAndDelete({_id:userId})
    res.status(200).json({message:"user deleted",data:resl})
    } 
    
    catch (error) {
        console.log(error.message)
    }
})

