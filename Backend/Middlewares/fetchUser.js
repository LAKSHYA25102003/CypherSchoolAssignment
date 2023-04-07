const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;


const fetchUser = async(req,res,next)=>{
    try{
        const token = req.headers["auth-token"];
        
        if(!token){
            throw new Error("token not found");
        }

        const user = jwt.verify(token,JWT_SECRET);
        if(user){
            req.user = user;
            next();
        }
    }catch(err){
        res.status(400).json({success:false,err:err.toString()});
    }
}

module.exports = {fetchUser}