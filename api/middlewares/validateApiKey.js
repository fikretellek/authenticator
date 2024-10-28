import db from "../db.js";

export const validateApiKey = async (req, res, next) => {
	const { apiKey } = req.body;

	if (!apiKey) {
		return res.status(403).json({ error: "Please provide an API key" });
	}

	try {
		const clientID = await db.query(
			"SELECT id FROM clients WHERE api_key = $1",
			[apiKey],
		);

		if (clientID.rows.length === 0) {
			return res.status(403).json({ error: "Invalid API key" });
		}

		req.clientID = clientID.rows[0].id;

		next();
	} catch {
		res.status(500).json({ error: "Internal server error" });
	}
};
