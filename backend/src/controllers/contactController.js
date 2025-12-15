import asyncErrorHandler from "express-async-handler";
import User from "../models/User.js";
// @desc Get all Data

export const getAllData = asyncErrorHandler(async (req, res) => {
	const getData = await User.find();
	console.log(getData);
	res.status(201).json(getData);
});

// @desc Create Data

export const createData = asyncErrorHandler(async (req, res) => {
	const create = await User.create(req.body);

	res.status(201).json(create);
});

// @desc Update Data

export const updateData = asyncErrorHandler(async (req, res) => {
	const updateData = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(201).send(`Update sucessfully: ${updateData}`);
});

// @desc Delete Data

export const deleteData = asyncErrorHandler(async (req, res) => {
	res.json({ message: `Deleted Data ${req.params.id}` });
});
