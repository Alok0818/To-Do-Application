const express = require("express");
const Todos = require("../Modals/TodosModal");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Todos.create(req.body);
    return res.send(data);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});

router.get("", async (req, res) => {
  try {
    const data = await Todos.find().lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/To_Do", async (req, res) => {
  const query = { task: "To Do" };
  try {
    const data = await Todos.find(query).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/Doing", async (req, res) => {
  const query = { task: "Doing" };
  try {
    const data = await Todos.find(query).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/Done", async (req, res) => {
  const query = { task: "Done" };
  try {
    const data = await Todos.find(query).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.get("/id/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await Todos.findById(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await Todos.findByIdAndDelete(req.params.id).lean().exec();
    console.log(data);
    return res.send(data);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
