const { capitalize } = require("./index.js");

describe("#capitalize suite", () => {
  it("should capitalize the first letter of a single word", () => {
    const result = capitalize("rice");
    expect(result).toBe("Rice");
  });

  it("should capitalize the first letter of each word in a multi-word string", () => {
    const result = capitalize("michel jordan");
    expect(result).toBe("Michel Jordan");
  });

  it("should return an empty string if input is an empty string", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  it("should return an throw error if input is not string", () => {
    expect(() => {
      capitalize(1);
    }).toThrowError("Invalid text!");
  });

  it("should not change a word that is already capitalized", () => {
    const result = capitalize("Rice");
    expect(result).toBe("Rice");
  });
});
