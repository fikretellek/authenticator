import { Router } from "express";

import { clientController } from "../controllers/index.js";
import { checkIfClientExist } from "../middlewares/checkIfClientExist.js";
import { validateEmailAndPassword } from "../middlewares/validateEmailAndPassword.js";

const router = Router();

router.post(
	"/sign-up",
	validateEmailAndPassword,
	checkIfClientExist,
	clientController.createNewClient,
);

router.get("/settings", (req, res) => {
	res.send("not implemented yet");
});

export default router;
