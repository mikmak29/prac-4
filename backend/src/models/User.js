import mongoose, { version } from "mongoose";

const databaseSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
		},
		gmail: {
			type: String,
			required: [true, "Gmail is required."],
		},
	},
	{
		versionKey: false,
	}
);

export default mongoose.model("User", databaseSchema, "prac4_users");
