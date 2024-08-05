function caesarCipher(str, shiftFactor) {
  if (!str) return "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const cipher = str.split("").map((s) => {
    const isUpperCase = s === s.toUpperCase();
    const alpha = isUpperCase ? alphabetUpper : alphabet;
    const index = alpha.findIndex((i) => i === s);

    if (index === -1) {
      // If character is not in the alphabet, return it unchanged
      return s;
    }

    const newIndex = (index + shiftFactor) % alpha.length;
    return alpha[newIndex];
  });
  const result = cipher.join("");

  return result;
}

module.exports = { caesarCipher };
