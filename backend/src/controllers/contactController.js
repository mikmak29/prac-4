// @desc Get all Data

export const getAllData = (req, res) => {
	res.json({ message: "Server is working!" });
};

export const createData = (req, res) => {
	res.json({ message: "Created Data!" });
};

export const updateData = (req, res) => {
	res.json({ message: `Updated Data ${req.params.id}` });
};

export const deleteData = (req, res) => {
	res.json({ message: `Deleted Data ${req.params.id}` });
};
