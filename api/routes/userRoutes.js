import { Router } from "express";

import { userController } from "../controllers/index.js";

const router = Router();

router.get("/", userController.setNewUser);

export default router;
