const mongoose = require("mongoose");

const eduEnum = ["None","Primary","Secondary","Higher Secondary","Graduation","Post Graduation"];
const proffEnum = ["None","Schooling","College","Teaching","Job","Freelancing"]

const onTheWebSchema = {
    LinkedInId:{type:String,default:""},
    GithubId:{type:String,default:""},
    FaceBookId:{type:String,default:""},
    Twitter:{type:String,default:""},
    Instagram:{type:String,default:""},
    Website:{type:String,default:""},
}

const proffInfoSchema = {
    highestEdu:{type:String,enum:eduEnum,default:"None"},
    currProff:{type:String,enum:proffEnum,default:"None"}
}

const User = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    mobile:{type:Number,required:false},
    password:{type:String, required:true},
    aboutMe:{type:String, required:false},
    onTheWeb:onTheWebSchema,
    proffInfo:proffInfoSchema,
    interest:[{type:String,default:[]}],
    followers:[{type:String, default:[]}], // for demonstration purpose fiver users are followers of every one
    followings:[{type:String, default:[]}],
    profileImageUrl:{type:String,required:true,default:"uploads/download_default_image.png"}
})

module.exports = mongoose.model('User',User);