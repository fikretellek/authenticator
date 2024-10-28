import { Router } from "express";

import messageRouter from "./messages/messageRouter.js";
import clientRoutes from "./routes/clientRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const api = Router();

api.use("/message", messageRouter);

api.use("/client", clientRoutes);

api.use("/user", userRoutes);

export default api;
