require("dotenv").config();

const express = require("express")
const app = express();
const methodOverride = require("method-override");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { authRouter } = require("./Routes/authRoutes");
const { userRouter } = require("./Routes/userRouter");
const BASE_URL = process.env.BASE_URL;


app.use(express.json());
app.use(morgan("dev"));



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, security-key, auth-token,"
    );
    next();
});

// app.use((req, res, next) => {

//     // if (req.originalMethod !== "GET" && req.headers["security-key"] !== process.env.API_SECRET) {
//     //     res.json({"message": "You are not authorized"});
//     //     return;
//     // }
//     if (req.originalMethod !== "GET" ) {
//         res.json({"message": "You are not authorized"});
//         return;
//     }
    
//     next();
// });


app.use(BASE_URL,authRouter);
app.use(BASE_URL,userRouter);


const runApp = async () => {

    mongoose.set('strictQuery', false);

    // const url = "mongodb+srv://" + process.env.mongo_user + ":" + process.env.mongopass + "@cluster0.ncrzato.mongodb.net/Clone?retryWrites=true&w=majority";
    // const url = "mongodb://localhost:27017"
    const url = "mongodb://0.0.0.0:27017/cipher";

    const connect = await mongoose.connect(url);
    
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`App Listening To Port ${PORT}`)
    })
}

runApp();