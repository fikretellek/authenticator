import bcrypt from "bcrypt";

import db from "../../../db.js";

export const createNewClient = async (req, res) => {
	const { email, password } = req.body;

	try {
		const passwordHash = await bcrypt.hash(password, 10);
		// this is way to compare password for future references "const isMatch = await bcrypt.compare(password, user.password);"
		const saveClientQuery = await db.query(
			"INSERT INTO clients (email, password_hash, api_key) VALUES ($1, $2, uuid_generate_v4()) RETURNING api_key",
			[email, passwordHash],
		);

		const apiKey = saveClientQuery.rows[0].api_key;

		res.status(201).send({ success: true, apiKey: apiKey });
	} catch {
		res.status(500).send({
			success: false,
			error: "An error occurred while creating the client.",
		});
	}
};
