const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../Model/User");

const JWT_SECRET = process.env.JWT_SECRET;
const saltRound = 10;

const signup = async(req,res)=>{
    try{
        
        const name = req.body.name;
        const email = req.body.email;

        const isuser = await User.findOne({email});
        if(isuser){
            throw new Error("User already exisited.");
        }

        const password = req.body.password;


        const hash = await bcrypt.hash(password,saltRound);
        const user = await User.create({
            name:name,
            email:email,
            password:hash
        })

        res.status(200).json({success:true,details:"Account Created Successfully"});

    }catch(err){
        res.status(400).json({success:false,err:err.toString()});
    }
}


const login = async(req,res)=>{
    try{
        const email = req.body.email;
        
        const isuser = await User.findOne({email});
        if(!isuser){
            throw new Error("User not found.");
        }
        
        const ispassmatched = await bcrypt.compare(req.body.password,isuser.password);
        if(!ispassmatched){
            throw new Error("Invalid credentials.");
        }

        const payload = {
            email:isuser.email,
        }

        const token = jwt.sign(payload,JWT_SECRET,{expiresIn:'24h'});
        res.status(200).json({success:true, details:{token}});

    }catch(err){
        res.status(400).json({success:false,err:err.toString()});
    }
}


const changePassword = async(req,res)=>{
    try{
        const email = req.user.email;
        
        const isuser = await User.findOne({email});
        if(!isuser){
            throw new Error("User not found.");
        }
        
        const ispassmatched = await bcrypt.compare(req.body.old_password,isuser.password);
        if(!ispassmatched){
            throw new Error("Incorrect current password.");
        }

        if(req.body.newpassword!==req.body.confirmpassword){
            throw new Error("Password not matched.");
        }   

        const newhashedpassword = await bcrypt.hash(req.body.newpassword,saltRound);

        const updatedUser = await User.findByIdAndUpdate(isuser._id,{password:newhashedpassword})
        
        res.status(200).json({success:true, details:"password updated successfully"});

    }catch(err){
        res.status(400).json({success:false,err:err.toString()});
    }   
}


module.exports = {signup,login,changePassword};