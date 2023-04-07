
const express = require("express");
const { fetchUser } = require("../Middlewares/fetchUser");
const { updateUserDetails } = require("../Controllers/userController");
const multer = require("multer");
const userRouter = express.Router();


const file_storage = multer.diskStorage({        // function for a image storage
    destination: function (req, file, cb) {     // setting destination
        cb(null, "./uploads")
    },
    filename: function (req, file, cb) {        // setting specification of file
        cb(null, Date.now() + "-" + file.originalname);

    }
})

const upload = 
    multer({    //function to upload image in the destination
    storage: file_storage, limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg .jpeg format allowed!'));
        }
    }
})



userRouter.patch("/user/updateinfo",fetchUser,updateUserDetails)
userRouter.patch("user/updateprofilepic",fetchUser,upload.single("profilepic"),)

module.exports = {userRouter}