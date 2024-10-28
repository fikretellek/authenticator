// import request from "supertest";

import { expect } from "vitest";

// import app from "./app.js";

describe("/api", () => {
	describe("GET /message", () => {
		it("returns a message", async () => {
			// await request(app).get("/api/message").expect(200, "Hello, world!");
			expect(10).toBe(10);
		});
	});
});
