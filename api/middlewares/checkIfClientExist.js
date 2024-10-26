import db from "../db.js";

export const checkIfClientExist = async (req, res, next) => {
	const { email } = req.body;
	const clientCheck = await db.query(
		"SELECT id FROM clients WHERE email = $1",
		[email],
	);
	if (clientCheck.rowCount) {
		return res.status(400).json({ error: "Email exist" });
	}

	next();
};
