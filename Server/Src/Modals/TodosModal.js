const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    task: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const TodosSchema = mongoose.model("todos", todosSchema);
module.exports = TodosSchema;
