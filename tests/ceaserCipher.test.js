import { ceaserCipher } from "../script/ceaserCipher";

test("cipher text", () => {
  expect(ceaserCipher("Hello! World", 3)).toBe("Khoor! Zruog");
});
