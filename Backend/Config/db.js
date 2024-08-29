const mongoose = require("mongoose");
const dot = require("dotenv");

dot.config();

const connectDB = async()=>{
    try{
        const mongourl = process.env.mongourl;
        const con = await mongoose.connect(mongourl);
    console.log(`mongoose is connected: ${con.connection.host}`);

    }
    catch(error){
        console.log(error.message);
    }
    
}
module.exports = connectDB;
