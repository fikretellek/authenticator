export const validateEmailAndPassword = (req, res, next) => {
	const { email, password } = req.body;

	const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ error: "Invalid email format." });
	}

	const isPasswordValid =
		password.length >= 8 &&
		/[A-Z]/.test(password) &&
		/[a-z]/.test(password) &&
		/\d/.test(password) &&
		/[!@#$%^&*(),.?":{}|<>]/.test(password);

	if (!isPasswordValid) {
		return res.status(400).json({
			error:
				"Password must be at least 8 characters long, contain uppercase and lowercase letters, a number, and a special character.",
		});
	}

	next();
};
