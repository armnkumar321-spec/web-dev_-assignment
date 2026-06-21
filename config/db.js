// require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Amankumar0701:Aman321@cluster0.hrbbj0n.mongodb.net/food_rest");
        console.log("Mongodb connected");
        console.log(mongoose.connection.host);
        console.log(mongoose.connection.name);
        
    } catch (error) {
        console.log("Mongodb fail to connect");
        
    }
};


module.exports = connectDB;