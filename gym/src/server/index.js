const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://kinungijames129:Gomycode2023@cluster0.befj3.mongodb.net/crud"
);

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Model = mongoose.model("test", userSchema);
const emp = new Model({
  name: "Alex",
  age: 40,
});
emp.save();
app.listen("3001", () => {
  console.log("Server running!!");
});
