const { Calculator } = require(".");

describe("#Calculator suite", () => {
  it("the sum of 2 + 2 should equal 4", () => {
    const result = Calculator.add(2, 2);
    expect(result).toEqual(4);
  });

  it("the subtraction of 13 minus 7 should equal 6", () => {
    const result = Calculator.subtract(13, 7);
    expect(result).toEqual(6);
  });

  it("the multiplication of 6 by 2 should equal 12", () => {
    const result = Calculator.multiply(6, 2);
    expect(result).toEqual(12);
  });

  it("the division of 6 by 2 should equal 3", () => {
    const result = Calculator.divide(6, 2);
    expect(result).toEqual(3);
  });
});
