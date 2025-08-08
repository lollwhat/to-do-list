const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect(
"mongodb+srv://<name>:<password>@cluster0.38u1b.mongodb.net/todoDB");

const taskSchema = {
    name: {
        type: String,
        required: true
    }
};

const Task = mongoose.model("Task", taskSchema);