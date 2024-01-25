const numerosEntreInicialYFinal =  require('.');

describe('Calculadora de numeros entre dos dados', () => {
    test.each`
        inicial | final | result
        ${0} | ${2} | ${[0, 1, 2]}
        ${2} | ${5} | ${[2, 3, 4, 5]}
        ${10} | ${20} | ${[10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        ${30} | ${35} | ${[30, 31, 32, 33, 34, 35]}
        ${40} | ${45} | ${[40, 41, 42, 43, 44, 45]}
        ${50} | ${55} | ${[50, 51, 52, 53, 54, 55]}
        ${60} | ${65} | ${[60, 61, 62, 63, 64, 65]}
    `('Los numeros entre $inicial y $final son $result', ({ inicial, final, result }) => {
        const lista = numerosEntreInicialYFinal(inicial, final);
        expect(lista).toEqual(result);
    });
});