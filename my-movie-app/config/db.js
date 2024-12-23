const mongoose = require('mongoose');
const config = require('./config.json');

const uri = config.dbUri;

const connectDB = async () => {
    try{
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    }catch(err){
        console.error("Connection error:",err);
        process.exit(1);
    }

};
module.exports = connectDB;