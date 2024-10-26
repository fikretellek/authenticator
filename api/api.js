import { Router } from "express";

import messageRouter from "./messages/messageRouter.js";

const api = Router();

api.use("/message", messageRouter);

api.get("/test", (req, res) => {
	res.send("hiiiiiiiiiiii");
});

export default api;
