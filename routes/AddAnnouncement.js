const express = require("express");
const announcement = require("./../model/announcement")

var addAnnouncement = express.Router();

addAnnouncement.post("/", async (req, res) => {
    try {

        console.log(req.body)
        const requestData = JSON.parse(req.body);
        console.log(requestData)

        const {
            deadline,
            description,
            name,
        } = requestData

        if (!(deadline && description && name)) return res.status(409).send("ENTER ALL INPUTS");

        await announcement.create({
            deadline,
            description,
            name,
        }).then(r => res.status(200).send(`ADDED ${name}`)).catch(err => res.status(400).send(err))

    } catch (error) {
        console.log(error)
    }
})

module.exports = addAnnouncement;