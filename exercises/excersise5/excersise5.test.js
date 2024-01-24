const calculadora = require("./index.js");

describe("Calculadora de cambio", () => {
  test.each`
    num      | result
    ${20}    | ${{ "10euros": 2 }}
    ${23.04} | ${{ "10euros": 2, "2euros": 1, "1euro": 1, "2cent": 2 }}
    ${33.33} | ${{ "10euros": 3, "2euros": 1, "1euro": 1, "10cent": 3, "2cent": 1, "1cent": 1 }}
    ${9.99}  | ${{ "2euros": 4, "1euro": 1, "50cent": 1, "10cent": 4 }}
    ${5.45}  | ${{ "2euros": 2, "1euro": 1, "10cent": 4, "2cent": 2, "1cent": 1 }}
    ${101}   | ${{ "10euros": 10, "1euro": 1 }}
    ${69.69} | ${{ "10euros": 6, "2euros": 4, "1euro": 1, "50cent": 1, "10cent": 1, "2cent": 4, "1cent": 1 }}
    ${77.53} | ${{ "10euros": 7, "2euros": 3, "1euro": 1, "50cent": 1, "2cent": 1, "1cent": 1 }}
    ${0.39}  | ${{ "10cent": 3, "2cent": 4, "1cent": 1 }}
    ${0.01}  | ${{ "1cent": 1 }}
  `("El cambio para $num es $result", ({ num, result }) => {
    const cambio = calculadora(num);
    expect(cambio).toMatchObject(result);
  });
});
