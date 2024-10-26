import { Router } from "express";

import clientController from "../controllers/clientController/index.js";
import { checkCredentialsForSignUp } from "../middlewares/checkCredentialsForSignUp.js";

const router = Router();

router.get(
	"/sign-up",
	checkCredentialsForSignUp,
	clientController.createNewClient,
);

export default router;
