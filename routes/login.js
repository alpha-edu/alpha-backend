const express = require("express");
const student = require("./../model/users/student")
const teacher = require("./../model/users/Teacher")
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
require ("dotenv").config();

var login = express.Router();


login.post("/student", async(req, res) => {
    try {
        const requestData = JSON.parse(req.body)
        const {email, password, userType} = requestData;
        
        if(!(email && password)){
            return res.status(400).send("enter all inputs");
        }
 
 
        const user = await student.findOne({email});
 
        if(user && (await bcrypt.compare(password, user.password))){
             const token = jsonwebtoken.sign(
                 {password : user.password, email },
                 process.env.JWT_TOKEN_KEY,
             )
             user.token = token;
      
             return res.status(200).json({
                 token,
                 tokenState: true,
                 email: user.email,
             });
        }
 
        return res.status(400).send("Invalid crediantials");
 
 
     } catch (error) {
        console.log(error);
     }
 
})


login.post("/teacher", async(req, res) => {
    try {
        const requestData = JSON.parse(req.body)
        const {email, password, userType} = requestData;
        
        if(!(email && password)){
            return res.status(400).send("enter all inputs");
        }
 
 
        const user = await teacher.findOne({email});
 
        if(user && (await bcrypt.compare(password, user.password))){
             const token = jsonwebtoken.sign(
                 {password : user.password, email },
                 process.env.JWT_TOKEN_KEY,
             )
             user.token = token;
      
             return res.status(200).json({
                 token,
                 tokenState: true,
                 email: user.email,
             });
        }
 
        return res.status(400).send("Invalid crediantials");
 
 
     } catch (error) {
        console.log(error);
     }
 
})

module.exports = login;