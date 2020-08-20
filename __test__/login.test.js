const request = require("supertest");
const app = require("../app");
const testData = require("./spec/data");

describe("Test user operation", () => {
  test("Login user", async () => {
    const response = await request(app)
      .post("/api/user/login")
      .send(testData.login);
    expect(response.statusCode).toBe(200);
  });
});
