import express from "express";
import * as contactController from "../controllers/contactController.js";

const router = express.Router();

router.route("/").get(contactController.getAllData);
router.route("/").post(contactController.createData);
router.route("/:id").put(contactController.updateData);
router.route("/:id").delete(contactController.deleteData);

export default router;
