function analyzeArray(list) {
  if (list.length === 0) return [];

  if (list.find((item) => typeof item === "string")) {
    throw new Error("The list must contain only numbers");
  }

  return {
    length: list.length,
    average: list.reduce((acc, cur) => acc + cur, 0) / list.length,
    max: Math.max(...list),
    min: Math.min(...list),
  };
}

module.exports = {
  analyzeArray,
};
