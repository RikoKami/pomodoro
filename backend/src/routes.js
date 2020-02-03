require("dotenv").config();

const express = require("express");
const routes = new express.Router();

const TaskController = require("./controllers/TaskController");

routes.post("/task", TaskController.store);

module.exports = routes;
