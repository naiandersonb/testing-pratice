const { reverseString } = require(".");

describe('#reverseString', () => {
  it("should return an empty string if input is an empty string", () => {
    const result = reverseString("");
    expect(result).toBe("");
  });

  it("should return an throw error if input is not string", () => {
    expect(() => {
      reverseString(1);
    }).toThrowError("Invalid text!");
  });

  it("should return a reversed string", () => {
    const result = reverseString("rice");
    expect(result).toBe("ecir");
  });
})