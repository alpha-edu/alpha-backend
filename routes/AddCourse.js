const express = require("express");
const course = require("./../model/course")

var addCourse = express.Router();

addCourse.post("/", async (req, res) => {
    try {

        console.log(req.body)
        const requestData = JSON.parse(req.body);
        console.log(requestData)

        const {
            couseId,
            name,
            shortName,
            instructors,
            duration,
            lactures,
            credit,
            description
        } = requestData

        if (!(couseId && name && shortName && instructors && duration && lactures && credit && description)) return res.status(409).send("ENTER ALL INPUTS");

        await course.create({
            couseId,
            name,
            shortName,
            instructors,
            duration,
            lactures,
            credit,
            description
        }).then(r => res.status(200).send(`ADDED ${name}`)).catch(err => res.status(400).send(err))

    } catch (error) {
        console.log(error)
    }
})

module.exports = addCourse;