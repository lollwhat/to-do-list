const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

mongoose.connect(
"mongodb+srv://brandonlcw2004:<db_password>@cluster0.tg7u4me.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const taskSchema = {
    name: {
        type: String,
        required: true
    }
};

const Task = mongoose.model("Task", taskSchema);

app.get("/", function(req, res){
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    Task.find({}, function(err, foundTasks){
        if (!err) {
            res.render("list", { tasks: foundTasks });
        }else{
            console.log(err);
        }
    });
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

app.post("/delete", function(req,res){
    const checkedItemId = req.body.checkbox;
    Task.findByIdAndRemove(checkedItemId, function(err){
        if(!err){
            console.log("Successfully deleted the task.");
            res.redirect("/");
        }
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
});