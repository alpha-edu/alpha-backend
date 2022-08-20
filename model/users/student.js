
const mongoose = require("mongoose");

const student = new mongoose.Schema(
    {
        name: { type: String, required: true },
        course: { type: String, required: true },
        semester: { type: Number, required: true },
        enrolled: { type: Object, required: true },
        email: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
    }
);

module.exports = mongoose.model("student", student);
