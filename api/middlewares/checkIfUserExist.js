import db from "../db.js";

export const checkIfUserExist = async (req, res, next) => {
	const { email } = req.body;
	const clientID = req.clientID;

	try {
		const existingUser = await db.query(
			"SELECT email FROM users WHERE client_id = $1 AND email = $2",
			[clientID, email],
		);

		if (existingUser.rows.length > 0) {
			return res.status(409).send({ error: "Email already exists" });
		}

		next();
	} catch {
		res.status(500).send({ error: "Internal server error" });
	}
};
