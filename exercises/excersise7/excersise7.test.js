const fibonacci = require("./index.js");

describe('Calculadora de numeros pares', () => {
    test.each`
        num   | result
        ${0} | ${[1]}
        ${2} | ${[1]}
        ${4} | ${[1, 3]}
        ${10} | ${[1, 3, 5, 7, 9]}
        ${11} | ${[1, 3, 5, 7, 9, 11]}
        ${12} | ${[1, 3, 5, 7, 9, 11]}
        ${20} | ${[1, 3, 5, 7, 9, 11, 13, 15, 17,19]}
        ${30} | ${[1, 3, 5, 7, 9, 11, 13, 15, 17,19, 21, 23, 25, 27, 29]}
    `('Dado el numero $num el resultado tiene que ser $result', ({ num, result }) => {
        const lista = fibonacci(num);
        expect(lista).toEqual(result);
    });
});