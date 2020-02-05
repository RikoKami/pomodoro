const Task = require("../models/Task");

module.exports = {
  // List
  async index(req, res) {
    const tasks = await Task.find().sort('-createAt');
    return res.json(tasks)
  },

  // Create
  async store(req, res) {
    try {
      const { name, description } = req.body;
  
      const task = await Task.create({
        name,
        description
      });

      res.status(201).json(task)

    } catch (error) {
      res.status(500).json({ message: `Não foi possível cadastrar a tarefa :\(`})
    }
  },


  async delete(req,res) {
    // Task.find({id: req.params}).deleteOne((error, task) => {
    //   if(error) throw console.log(error);
    //   res.status(200).json({status: 200, message: `Tarefa deletada com sucesso.` });
    // })
    Task.deleteOne({ id  : req.params} , (error) => {
      if(error) throw console.log(error)
    });
    // try {
    // } catch (error) {
    //   res.status(500).send('Não foi possíuvel deletar a tarefa')
    // }
  }
};  
