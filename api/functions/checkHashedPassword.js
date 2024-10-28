import bcrypt from "bcrypt";

export const checkHashedPassword = async (password, passwordHash) => {
	const passwordsMatch = await bcrypt.compare(password, passwordHash);

	return passwordsMatch;
};
