const numerosPrimos = require("./index.js");

describe('Calculadora de numeros primos', () => {
    test.each`
        num   | result
        ${10}  | ${[2, 3, 5, 7]} 
        ${5}  | ${[2, 3, 5]} 
        ${15}  | ${[2, 3, 5, 7, 11, 13]} 
        ${30}  | ${[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]} 
        ${0}  | ${[]} 
        ${100}  | ${[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 
            31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 
            73, 79, 83, 89, 97]} 
    `('Con el numero $num calcular los siguents resultados \n $result', ({ num, result }) => {
        const lista = numerosPrimos(num);
        expect(lista).toEqual(result);
    });
});