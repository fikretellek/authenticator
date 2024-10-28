import jwt from "jsonwebtoken";

import db from "../../../db.js";
import { checkHashedPassword } from "../../../functions/checkHashedPassword.js";

// this line will be moved to .env
const JWT_SECRET = "abc12345";

export const getUser = async (req, res) => {
	const { email, password } = req.body;
	const clientID = req.clientID;

	try {
		const userDetails = await db.query(
			"SELECT id, role, password_hash FROM users WHERE email = $1 AND client_id = $2",
			[email, clientID],
		);

		if (userDetails.rows.length === 0) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const user = userDetails.rows[0];

		const isMatch = await checkHashedPassword(password, user.password_hash);

		if (isMatch) {
			const payload = {
				id: user.id,
				role: user.role,
			};

			const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

			return res.json({ token });
		} else {
			return res.status(401).json({ message: "Invalid credentials" });
		}
	} catch {
		return res
			.status(500)
			.json({ message: "An error occurred while processing your request." });
	}
};
