import { Router } from "express";

import messageRouter from "./messages/messageRouter.js";
import clientRoutes from "./routes/clientRoutes.js";

const api = Router();

api.use("/message", messageRouter);

api.use("/sign-up", clientRoutes);

api.get("/settings", (req, res) => {
	res.send("not implemented yet");
});

api.get("/user", (req, res) => {
	res.send("not implemented yet");
});

api.get("/user/set", (req, res) => {
	res.send("not implemented yet");
});

api.get("/user/get", (req, res) => {
	res.send("not implemented yet");
});

api.get("/user/update", (req, res) => {
	res.send("not implemented yet");
});

api.get("/user/delete", (req, res) => {
	res.send("not implemented yet");
});

export default api;
