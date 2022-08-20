
const mongoose = require("mongoose");

const announcement = mongoose.Schema({
    deadline: { type: Date, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
})

module.exports = mongoose.model("announcement", announcement);