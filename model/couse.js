
const mongoose = require("mongoose")

const course = new mongoose.Schema({
    couseId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    shortName: { type: String, required: true },
    instructors: { type: Object, required: true },
    duration: { type: Number, required: true },
    lactures: { type: Object, required: true },
    credit: { type: Number, required: true },
    description: { type: String, required: true },
})

module.exports = mongoose.model("course", course);