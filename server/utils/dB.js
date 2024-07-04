const mongoose = require("mongoose");

const URI = process.env.MONGO_DB_URL;
const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("database connection fail");
        process.exit(0);
    }
}
module.exports=connectDb