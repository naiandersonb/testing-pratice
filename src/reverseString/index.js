function reverseString(str) {
  if (!str) return "";

  if (typeof str !== "string") {
    throw new Error("Invalid text!");
  }

  return str.split("").reverse().join("");
}

module.exports = {
  reverseString,
};
