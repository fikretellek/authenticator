import { Router } from "express";

import { userController } from "../controllers/index.js";
import { checkIfUserExist } from "../middlewares/checkIfUserExist.js";
import { validateApiKey } from "../middlewares/validateApiKey.js";
import { validateEmailAndPassword } from "../middlewares/validateEmailAndPassword.js";

const router = Router();

router.post(
	"/set",
	validateApiKey,
	validateEmailAndPassword,
	checkIfUserExist,
	userController.setNewUser,
);

router.get("/get", validateApiKey, userController.getUser);

router.get("/verify", validateApiKey, userController.verifyUser);

router.get("/user/update", (req, res) => {
	res.send("not implemented yet");
});

router.get("/user/delete", (req, res) => {
	res.send("not implemented yet");
});

export default router;
