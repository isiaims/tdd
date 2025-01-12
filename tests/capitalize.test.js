import { capitalize } from "../script/capitalize";

test("capitalized the first letter", () => {
  expect(capitalize("data")).toBe("Data");
});
