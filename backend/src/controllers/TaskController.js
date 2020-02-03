const Task = require("../models/Task");

module.exports = {
  async index(req, res) {},

  async store(req, res) {
    const { name, description } = req.body;

    const task = await Task.create({
      name,
      description
    });

    return res.json(task);
  }
};
