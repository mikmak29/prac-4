import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();
const port = process.env.PORT || 1100;

const serverStarter = async () => {
	try {
		app.listen(port, () => {
			console.log(`Server listening at port ${port}`);
		});
	} catch (error) {
		throw new Error("Server Error!");
	}
};

serverStarter();
