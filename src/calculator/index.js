class Calculator {
  constructor() {}

  static add(...values) {
    return values.reduce((acc, cur) => acc + cur, 0);
  }
  static subtract(a, b) {
    return a - b;
  }
  static divide(a, b) {
    if (a === 0 || b === 0) return 0;
    return a / b;
  }
  static multiply(...values) {
    return values.reduce((acc, cur) => acc * cur, 1);
  }
}

module.exports = { Calculator };
