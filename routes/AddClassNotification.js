const express = require("express");
const classNotification = require("./../model/classNotification")

var addClassNotification = express.Router();

addClassNotification.post("/", async (req, res) => {
    try {

        console.log(req.body)
        const requestData = JSON.parse(req.body);
        console.log(requestData)

        const {
            courseId,
            name,
            deadline,
        } = requestData

        if (!(courseId && description && name)) return res.status(409).send("ENTER ALL INPUTS");

        await classNotification.create({
            courseId,
            name,
            deadline,
        }).then(r => res.status(200).send(`ADDED ${name}`)).catch(err => res.status(400).send(err))

    } catch (error) {
        console.log(error)
    }
})

module.exports = addClassNotification;