const { analyzeArray } = require(".");

describe("#analyzeArray suite", () => {
  const resultValue = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };

  it("should array is empty return empty array", () => {
    const result = analyzeArray([]);
    expect(result).toEqual([]);
  });

  it("should return throw error if the array has a value other than number", () => {
    expect(() => {
      analyzeArray([1, "2"]);
    }).toThrowError("The list must contain only numbers");
  });

  it("should return 'resultValue' when the input array contains the values [1, 8, 3, 4, 2, 6]", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual(resultValue);
  });
});
