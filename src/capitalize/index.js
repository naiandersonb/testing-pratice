function capitalize(text = "") {
  if (typeof text !== "string") {
    throw new Error("Invalid text!");
  }

  if (!text) return "";

  if (/\s/.test(text)) {
    const strArr = text.split(" ");
    return strArr.map((item) => capitalize(item)).join(" ");
  }

  return text.charAt(0).toLocaleUpperCase().concat(text.slice(1));
}

capitalize("rice");

module.exports = {
  capitalize,
};
