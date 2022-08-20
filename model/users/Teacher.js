
const mongoose = require("mongoose");

const teacher = new mongoose.Schema(
    {
        name: { type: String, required: true },
        position: { type: String, required: true },
        teacherId: { type: String, required: true },
        courses: { type: Object, required: true },
        email: { type: String, unique: true },
        password: { type: String },
        token: { type: String },
    }
);

module.exports = mongoose.model("teacher", teacher);
