
const mongoose = require("mongoose");

const attendance = mongoose.Schema({
    courseId: { type: String, required: true },
    code: { type: String, required: true },
    students: { type: Object, required: true },

})

module.exports = mongoose.model("attendance", attendance);