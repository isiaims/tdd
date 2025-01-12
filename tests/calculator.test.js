import { add, divide, multiply, subtract } from "../script/calculator";

test("adds 4 + 6 to get 10", () => {
  expect(add(4, 6)).toBe(10);
});

test("subtracts 4 from 6 to get 2", () => {
  expect(subtract(6, 4)).toBe(2);
});

test("divides 144 by 6 to get 24", () => {
  expect(divide(144, 6)).toBe(24);
});

test("multiplies 4 by 6 to get 24", () => {
  expect(multiply(4, 6)).toBe(24);
});
