const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Note = require("./src/models/Note");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // if true -> nested objects (correct) else nested objects(Not correct)
app.use(bodyParser.json());

const mongodbpath =
  "mongodb+srv://saadrehman:1325@cluster0.gpgirrx.mongodb.net/notesdb";

mongoose.connect(mongodbpath).then(function () {
  app.get("/", function (req, res) {
    const response = { message: "API Works!" };
    res.send(response);
  });
  const noteRouter = require("./src/routes/Note");
  app.use("/notes", noteRouter);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server Started at port: " + PORT);
});
