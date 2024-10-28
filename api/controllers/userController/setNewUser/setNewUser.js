import db from "../../../db.js";
import { hashPassword } from "../../../functions/hashPassword.js";

export const setNewUser = async (req, res) => {
	const { email, password, role } = req.body;
	const clientID = req.clientID;

	try {
		const passwordHash = await hashPassword(password);

		const setUserReturnID = await db.query(
			"INSERT INTO users (email, password_hash, role, client_id) VALUES ($1, $2, $3, $4) RETURNING id",
			[email, passwordHash, role || "user", clientID],
		);

		res.status(201).json({
			message: "User created successfully.",
			...setUserReturnID.rows[0],
		});
	} catch {
		res.status(500).json({ error: "Internal server error." });
	}
};
