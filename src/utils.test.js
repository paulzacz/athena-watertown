import { isValidEmail } from "./utils";
describe("utils", () => {
  it("should identify a valid email", () => {
    const isValid = isValidEmail("@c@h.com");
    expect(isValid).toBe(true);
  });
});
