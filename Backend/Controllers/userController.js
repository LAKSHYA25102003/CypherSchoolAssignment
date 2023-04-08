const express = require("express");
const mongoose = require("mongoose");
const User = require("../Model/User");
const fs = require("fs");


const updateUserDetails = async (req, res) => {
    try {
        const email = req.user.email;
        const isuser = await User.findOne({ email });

        if (!isuser) {
            throw new Error("User not found.")
        }



        const onTheWeb = {
            LinkedInId: req.body.linkedinid ? req.body.linkedinid : isuser.onTheWeb.LinkedInId,
            GithubId: req.body.githubid ? req.body.githubid : isuser.onTheWeb.GithubId,
            FaceBookId: req.body.facebookid ? req.body.facebookid : isuser.onTheWeb.FaceBookId,
            Twitter: req.body.twitterid ? req.body.twitterid : isuser.onTheWeb.Twitter,
            Instagram: req.body.instagramid ? req.body.instagramid : isuser.onTheWeb.Instagram,
            Website: req.body.website ? req.body.website : isuser.onTheWeb.Website,
        }



        const proffInfo = {
            highestEdu: req.body.highestEdu ? req.body.highestEdu : isuser.proffInfo.highestEdu,
            currProff: req.body.currProff ? req.body.currProff : isuser.proffInfo.currProff
        }

        const updatedUser = await User.findByIdAndUpdate(isuser._id, {
            onTheWeb, proffInfo,
            aboutMe: req.body.aboutMe ? req.body.aboutMe : isuser.aboutMe,
            interest: req.body.interest ? req.body.interest : isuser.interest,
            name: req.body.name ? req.body.name : isuser.name,
            mobile: req.body.mobile ? req.body.mobile : isuser.mobile
        })

        const u = await User.findById(isuser._id);

        res.status(200).json({ success: true, details: "User updated.", user: u });

    } catch (err) {
        res.status(400).json({ success: false, err: err.toString() })
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

const getUser = async (req, res) => {
    try {
        const email = req.user.email;
        const isuser = await User.findOne({ email }).select("-password");
        if (!isuser) {
            throw new Error("User not found.")
        }
        res.status(200).json({ success: true, user: isuser });

    } catch (err) {
        res.status(400).json({ success: false, err: err.toString() })
    }
}


const updateProfilePic = async (req, res) => {
    try {
        const email = req.user.email;

        const isuser = await User.findOne({ email });

        if (!isuser) {
            throw new Error("User not found.");
        }

        const newPath = req.file.path.replace(/\\/g, '/');



        const updatedUser = await User.findByIdAndUpdate(isuser._id, { profileImageUrl: newPath });

        if (isuser.profileImageUrl !== "uploads/download_default_image.png") {
            fs.unlinkSync(isuser.profileImageUrl);
        }
        res.status(200).json({ success: true, url: newPath })

    } catch (err) {
        res.status(400).json({ success: false, message: err.toString() })
    }
}

const getFollowers = async (req, res) => {
    try {
        const email = req.user.email;
        let p = req.body.page;
        const isuser = await User.findOne({ email }).select("-password");
        if (!isuser) {
            throw new Error("User not found.")
        }
        let limit = 10;  // this is the limit for pagination . at once only 10 followers will be fethced
        let result = [];
        for (let i = (p - 1) * limit; i < isuser.followers.length && i < (p - 1) * limit + limit; i++) {
            let u = await User.findById(isuser.followers[i]).select("-password");
            result.push(u);
        }
        res.status(200).json({ success: true, followers: result });

    } catch (err) {
        res.status(400).json({ success: false, message: err.toString() })
    }
}

const followUnfollow = async (req, res) => {
    try {
        let curr = await User.findOne({ email: req.user.email });
        let friend = await User.findById(req.body.id);
        if (curr.followings.includes(friend._id)) {
            curr.followings.splice(curr.followings.indexOf(friend._id), 1);
            friend.followers.splice(friend.followers.indexOf(curr._id), 1);
            const newcurr = await User.findByIdAndUpdate(curr._id, { followings: curr.followings });
            const newfriend = await User.findByIdAndUpdate(friend._id, { followers: friend.followers });
            let ncurr = await User.findById(curr._id);
            res.status(200).json({ success: true, message: "successfully followed", user: ncurr });
        }
        else {
            curr.followings.push(friend._id);
            friend.followers.push(curr._d);

            const newcurr = await User.findByIdAndUpdate(curr._id, { followings: curr.followings });
            const newfriend = await User.findByIdAndUpdate(friend._id, { followers: friend.followers });
            let ncurr = await User.findById(curr._id);
            res.status(200).json({ success: true, message: "successfully followed", user: ncurr });
        }

    } catch (err) {
        res.status(400).json({ success: false, err: err.toString() })
    }
}

module.exports = { updateUserDetails, getUser, updateProfilePic, getFollowers, followUnfollow }