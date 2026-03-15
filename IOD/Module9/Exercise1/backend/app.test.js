const request = require("supertest");
const app = require("./app");

describe("Calculator Routes", () => {
  // generate some random numbers to test the calculator
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  // add test case
  test("GET /Calculate/add => sum of numbers", () => {
    return request(app)
      .get(`/Calculate/Add?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          res: number1 + number2,
        });
      });
  });

  // subtract test case
  test("GET /Calculate/subtract => subtraction of numbers", () => {
    return request(app)
      .get(`/Calculate/Subtract?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          res: number1 - number2,
        });
      });
  });

  // divide test case
  test("GET /Calculate/divide => sum of numbers", () => {
    return request(app)
      .get(`/Calculate/Divide?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          res: number1 / number2,
        });
      });
  });

  // multiply test case
  test("GET /Calculate/multiply => sum of numbers", () => {
    return request(app)
      .get(`/Calculate/Multiply?num1=${number1}&num2=${number2}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({
          res: number1 * number2,
        });
      });
  });
});
