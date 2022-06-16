const express = require("express");
const cors = require("cors");
const connect = require("./Src/Configs/db.js");

const app = express();
app.use(express.json());

let port = process.env.PORT || 2344;
// const mongoose = require("mongoose");
const todosApi = require("./Src/Controllers/TodosController");

app.use(cors());

app.use("/todos", todosApi);

app.listen(port, async (req, res) => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2344");
});
