import { Router } from "express";

import { clientController } from "../controllers/index.js";
import { checkCredentialsForSignUp } from "../middlewares/checkCredentialsForSignUp.js";
import { checkIfClientExist } from "../middlewares/checkIfClientExist.js";

const router = Router();

router.get(
	"/sign-up",
	checkCredentialsForSignUp,
	checkIfClientExist,
	clientController.createNewClient,
);

export default router;
