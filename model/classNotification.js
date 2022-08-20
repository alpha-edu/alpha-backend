
const mongoose = require("mongoose");

const classNotification = mongoose.Schema({
    courseId: {type:String, required:true},
    name: {type:String, required:true},
    deadline: {type:Date, required:true},
})

module.exports = mongoose.model("classNotification", classNotification);