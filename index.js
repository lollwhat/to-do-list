const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

// MongoDB connection with error handling
mongoose.connect("mongodb+srv://brandonlcw2004:lolwhat@cluster0.tg7u4me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const taskSchema = {
    name: {
        type: String,
        required: true
    }
};

const Task = mongoose.model("Task", taskSchema);

app.get("/", async function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    try {
        const foundTasks = await Task.find({});
        res.render("index", { 
            tasks: foundTasks,
            today: day 
        });
    } catch (err) {
        console.log(err);
    }
});

app.post("/", function(req, res){
    const taskName = req.body.newTask;
    if(taskName){
        const task = new Task({
            name: taskName,
        });
        task.save()
            .then(() => {
                res.redirect("/");
            });
    }else{
        res.redirect("/");
    }
})

app.post("/delete", async function(req,res){
    const checkedItemId = req.body.checkbox;
    try {
        await Task.findByIdAndDelete(checkedItemId);
        console.log("Successfully deleted the task.");
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});