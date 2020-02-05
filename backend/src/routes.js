const express = require("express");
const routes = new express.Router();

const TaskController = require("./controllers/TaskController");

routes.post("/task", TaskController.store);
routes.get("/task", TaskController.index);
routes.delete("/task/:id", TaskController.delete);

module.exports = routes;
