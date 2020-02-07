import Task from "../models/Task";

module.exports = {
	// List
	async index(req: any, res: { json: (arg0: any) => any }) {
		const tasks = await Task.find().sort("-createAt");
		return res.json(tasks);
	},

	// Create
	async store(
		req: { body: { name: any; description: any } },
		res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { message: string }): void; new (): any } } },
	) {
		try {
			const { name, description } = req.body;

			const task = await Task.create({
				name,
				description,
			});
			res.status(201).json(task);
		} catch (error) {
			res.status(500).json({
				message: `Não foi possível cadastrar a tarefa :\(`,
			});
		}
	},

	// Delete
	async delete(
		req: { params: { id: any } },
		res: {
			status: (arg0: number) => { (): any; new (): any; json: { (arg0: any): void; new (): any }; send: { (arg0: string): void; new (): any } };
		},
	) {
		try {
			const x = await Task.findOneAndDelete({
				_id: req.params.id,
			}).select(" name description ");
			res.status(201).json(x);
		} catch (error) {
			res.status(500).send("Não foi possíuvel deletar a tarefa");
		}
	},
};
