import express from "express";
const routes = new express.Router();

import TaskController from "./controllers/TaskController";

routes.post("/task", TaskController.store);
routes.get("/task", TaskController.index);
routes.delete("/task/:id", TaskController.delete);

module.exports = routes;
