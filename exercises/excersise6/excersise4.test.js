const fibonacci = require("./index.js");

describe('Calculadora de numeros pares', () => {
    test.each`
        num   | result
        ${0} | ${[0]}
        ${2} | ${[0, 2]}
        ${4} | ${[0, 2, 4]}
        ${10} | ${[0, 2, 4, 6, 8, 10]}
        ${11} | ${[0, 2, 4, 6, 8, 10, 12]}
        ${12} | ${[0, 2, 4, 6, 8, 10, 12]}
        ${20} | ${[0, 2, 4, 6, 8, 10, 12, 14, 16, 18,20]}
        ${30} | ${[0, 2, 4, 6, 8, 10, 12, 14, 16, 18,20, 22, 24, 26, 28, 30]}
    `('Dado el numero $num el resultado tiene que ser $result', ({ num, result }) => {
        const lista = fibonacci(num);
        expect(lista).toEqual(result);
    });
});