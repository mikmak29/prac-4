import express from "express";

const router = express.Router();

router.route("/").get((req, res) => {
	res.json({ message: "Server is working!" });
});

router.route("/").post((req, res) => {
	res.json({ message: "Created Data!" });
});

router.route("/:id").put((req, res) => {
	res.json({ message: `Updated Data ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
	res.json({ message: `Deleted Data ${req.params.id}` });
});

export default router;
