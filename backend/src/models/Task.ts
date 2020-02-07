const { Schema, model } = require("mongoose");

const TaskSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: String,
	},
	{
		timestamps: true,
	},
);

module.exports = model("Task", TaskSchema);
