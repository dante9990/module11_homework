import { division } from "../division.js";

describe("test division", () => {
  it("division 2 / 1 to equal 2", () => {
    const result = division(2, 1);
    expect(result).toBe(2);
  }),
    it("division 4 / 2 to equal 2", () => {
      const result = division(4, 2);
      expect(result).toBe(2);
    });
});