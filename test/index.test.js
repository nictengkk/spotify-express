const request = require("supertest");
const app = require("../app");

describe("Homepage", () => {
  test("should display Welcome, please login with status code 200", done => {
    request(app)
      .get("/")
      .expect(200)
      .expect("Welcome, please login", done);
  });
});
