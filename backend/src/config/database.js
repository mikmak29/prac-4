import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const DATABASEURL = process.env.MONGO_URL;

export const dbConnection = async () => {
	try {
		const connectDB = await mongoose.connect(DATABASEURL);
		console.log(`Database connected successfully at ${connectDB.connection.db.databaseName}!`);
	} catch (error) {
		throw new Error("Server Error");
	}
};
