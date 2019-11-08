import { isValidEmail } from "./utils";
describe("utils", () => {
  it("should identify a valid email", () => {
    const isValid = isValidEmail("c@h.com");
    expect(isValid).toBe(true);
  });
  it("should identify c.com as an invalid email", () => {
    const isValid = isValidEmail("c.com");
    expect(isValid).toBe(false);
  });
  it("should identify empty string as an invalid email", () => {
    const isValid = isValidEmail("");
    expect(isValid).toBe(false);
  });
});
