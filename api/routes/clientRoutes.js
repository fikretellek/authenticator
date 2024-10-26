import { Router } from "express";

import clientController from "../controllers/clientController/index.js";

const router = Router();

router.get("/", clientController.createNewClient);

export default router;
