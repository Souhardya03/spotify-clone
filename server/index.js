require("dotenv").config();

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const connectdB = require("./utils/dB");
const authRoute = require("./router/authRouter");
const songRoute = require("./router/songRouter");
const playlistRoute = require("./router/playlistRouter");
const likedRoute = require("./router/likedRouter")
//CORS Policy
const corsoption = {
    origin : "*",
    methods : "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials : true, 
}
app.use(cors(corsoption))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

//Routes
app.use("/auth",authRoute);
app.use("/song",songRoute);
app.use("/playlist",playlistRoute);
app.use("/liked",likedRoute)


connectdB().then(()=>{
    app.listen(port , ()=>{
        console.log( `Server is running on ${port}`);
    })
})