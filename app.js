require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const cors = require("cors")
// const Student = require("./model/users/student");


const register = require("./routes/Register");
const bodyparser = require("body-parser");
const addCourse = require("./routes/AddCourse");
const addClassNotification = require("./routes/AddClassNotification");
const addAnnouncement = require("./routes/AddAnnouncement");
const login = require("./routes/login");

const app = express();

app.use(bodyparser.text({ limit: '50mb' }))
app.use(cors({
  origin:'*'
}))


app.get("/", (req, res) => {
  console.log("OKII")
  res.status(200).send("OKIIII")
})

app.post("/welcome", (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.use("/register", register)
app.use("/addCourse", addCourse)
app.use("/addClassNotification", addClassNotification)
app.use("/addAnnouncement", addAnnouncement)
app.use("/login", login)
module.exports = app;