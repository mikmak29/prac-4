import asyncErrorHandler from "express-async-handler";
// @desc Get all Data

export const getAllData = asyncErrorHandler(async (req, res) => {
	res.json({ message: "Server is working!" });
});

// @desc Create Data

export const createData = asyncErrorHandler(async (req, res) => {
	res.json({ message: "Created Data!" });
});

// @desc Update Data

export const updateData = asyncErrorHandler(async (req, res) => {
	res.json({ message: `Updated Data ${req.params.id}` });
});

// @desc Delete Data

export const deleteData = asyncErrorHandler(async (req, res) => {
	res.json({ message: `Deleted Data ${req.params.id}` });
});
