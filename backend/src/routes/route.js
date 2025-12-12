import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.json({ message: "Server is working!" });
});

router.post("/", (req, res) => {
	res.json({ message: "Created Data!" });
});

router.put("/:id", (req, res) => {
	res.json({ message: `Updated Data ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
	res.json({ message: `Deleted Data ${req.params.id}` });
});

export default router;
