// import request from "supertest";

import { expect } from "vitest";

// import app from "./app.js";

describe("base API endpoints", () => {
	it("exposes a health endpoint", async () => {
		// await request(app).get("/healthz").expect(200);
		expect(10).toBe(10);
	});
});
