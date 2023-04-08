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
        let f=["642fcf2df3abe0851f24bd21","64313546fa7b4d9d1bcdf66f","64313587fa7b4d9d1bcdf670","643135b4fa7b4d9d1bcdf672","643135ebfa7b4d9d1bcdf673"];
        const user = await User.create({
            name:name,
            email:email,
            password:hash,
            followers:f
        })

        res.status(200).json({success:true,message:"Account Created Successfully"});

    }catch(err){
        res.status(400).json({success:false,message:err.toString()});
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
        res.status(200).json({success:true, token:token,user:isuser});

    }catch(err){
        res.status(400).json({success:false,message:err.toString()});
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
        const u= await User.findById(isuser._id);
        
        res.status(200).json({success:true, message:"password updated successfully",user:u});

    }catch(err){
        res.status(400).json({success:false,message:err.toString()});
    }   
}


module.exports = {signup,login,changePassword};