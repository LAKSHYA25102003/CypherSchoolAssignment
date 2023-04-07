const express = require("express");
const mongoose = require("mongoose");
const User = require("../Model/User");

const updateUserDetails = async(req,res)=>{
    try{
        const email = req.user.email;
        const isuser = await User.findOne({email});
        
        if(!isuser){
            throw new Error("User not found.")
        }

        const onTheWeb = {
            LinkedInId:req.body.linkedinid?req.body.linkedinid:isuser.onTheWeb.LinkedInId,
            GithubId:req.body.githubid?req.body.githubid:isuser.onTheWeb.GithubId,
            FaceBookId:req.body.facebookid?req.body.facebookid:isuser.onTheWeb.FaceBookId,
            Twitter:req.body.twitterid?req.body.twitterid:isuser.onTheWeb.Twitter,
            Instagram:req.body.instagramid?req.body.instagramid:isuser.onTheWeb.Instagram,
            Website:req.body.website?req.body.website:isuser.onTheWeb.Website,
        }
        
        const proffInfo = {
            highestEdu:req.body.highestEdu?req.body.highestEdu:isuser.proffInfo.highestEdu,
            currProff:req.body.currProff?req.body.currProff:isuser.proffInfo.currProff
        }

        const updatedUser = await User.findByIdAndUpdate(isuser._id,{
            onTheWeb,proffInfo
        })

        res.status(200).json({success:true,details:"User updated."});

    }catch(err){
        res.status(400).json({success:false, err:err.toString()})
    }
}

// const updateProfilePic = async(req,res)=>{
//     try{
//         const email = req.user.email;
        
//         const isuser = await User.findOne({email});
        
//         if(!isuser){
//             throw new Error("User not found.");
//         }




//     }catch(err){
//         res.status(400).json({success:false, err:err.toString()})
//     }
// }


module.exports = {updateUserDetails}