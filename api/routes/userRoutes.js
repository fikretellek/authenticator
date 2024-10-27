import { Router } from "express";

import { userController } from "../controllers/index.js";

const router = Router();

router.get("/", userController.setNewUser);

router.get("/user/get", (req, res) => {
	res.send("not implemented yet");
});

router.get("/user/update", (req, res) => {
	res.send("not implemented yet");
});

router.get("/user/delete", (req, res) => {
	res.send("not implemented yet");
});

export default router;
