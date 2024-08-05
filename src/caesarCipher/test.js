const { caesarCipher } = require(".");

describe("#caesarCipher suite", () => {
  it('ao passar a palavra "xyz" deve retornar "abc"', () => {
    const result = caesarCipher("xyz", 3);
    expect(result).toEqual("abc");
  });

  it('ao passar a palavra "HeLLo" deve retornar "KhOOr"', () => {
    const result = caesarCipher("HeLLo", 3);
    expect(result).toEqual("KhOOr");
  });
  it('ao passar a palavra "Hello, World!" deve retornar "Khoor, Zruog!"', () => {
    const result = caesarCipher("Hello, World!", 3);
    expect(result).toEqual("Khoor, Zruog!");
  });
});
