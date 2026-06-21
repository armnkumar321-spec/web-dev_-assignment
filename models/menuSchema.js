const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    foodName: String,
    category: String,
    price: Number,
    quantity: Number,
    rating: Number
});

module.exports = mongoose.model("Food", menuSchema, "menu");