import jwt from "jsonwebtoken";

// this line will be moved to .env
const JWT_SECRET = "abc12345.";

export const verifyUser = (req, res) => {
	const token = req.headers["authorization"]?.split(" ")[1];

	if (!token) {
		return res.status(401).json({ message: "Access token required" });
	}

	try {
		const payload = jwt.verify(token, JWT_SECRET);

		if (payload) {
			res.send({ success: true, message: "Valid token", payload });
		}
	} catch {
		return res.status(403).json({ message: "Invalid or expired token" });
	}
};
