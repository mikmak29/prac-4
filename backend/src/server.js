import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import router from "./routes/route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 1100;

app.use(cors());
app.use(express.json());

app.use("/", router);

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
