const express = require("express");
const student = require("./../model/users/student")
const teacher = require("./../model/users/Teacher")
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
require ("dotenv").config();


var register = express.Router();

register.post("/student", async(req, res) => {
    try {
        console.log(req.body)
        const requestData = JSON.parse(req.body);
        console.log(requestData)
        const {
            name,
            course,
            semester,
            enrolled,
            email,
            password
        } = requestData;

        if(!(email && password && name && course && semester && enrolled)) return res.status(409).send("ENTER ALL INPUTS");

        var user = await student.findOne({email});

        if(user) return res.status(409).send("USER ALREADY EXISTES");

        const encryptedPassword = await bcrypt.hash(password, 10)

        const jwtToken = jsonwebtoken.sign(
            {email, name, course},
            process.env.JWT_TOKEN_KEY,

        );
        console.log(jwtToken);

        await student.create({
            name,
            course,
            semester,
            enrolled,
            email,
            password:encryptedPassword,
            token:jwtToken
        })

        return res.status(200).send({
            jwtToken,
            loginState:true
        })

    } catch (error) {
        console.log(error)
    }
})

register.post("/teacher", async(req, res) => {
    try {
        console.log(req.body)
        const requestData = JSON.parse(req.body);
        console.log(requestData)
        const {
            name,
            position,
            teacherId,
            courses,
            email,
            password
        } = requestData;

        if(!(email && password && name && position && teacherId && courses)) return res.status(409).send("ENTER ALL INPUTS");

        var user = await teacher.findOne({email});

        if(user) return res.status(409).send("USER ALREADY EXISTES");

        const encryptedPassword = await bcrypt.hash(password, 10)

        const jwtToken = jsonwebtoken.sign(
            {email, name, position},
            process.env.JWT_TOKEN_KEY,

        );
        console.log(jwtToken);

        await teacher.create({
            name,
            position,
            teacherId,
            courses,
            email,
            password:encryptedPassword,
            token:jwtToken
        })

        return res.status(200).send({
            jwtToken,
            loginState:true
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = register;