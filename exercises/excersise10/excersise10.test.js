const numerosEntreInicialYFinal =  require('.');

describe('Calculadora de suma de listas', () => {
    test.each`
        inicial | final | result
        ${[1, 1, 1]} | ${[2, 2, 2]} | ${[3, 3, 3]}
        ${[1, 2, 1]} | ${[2, 3, 2]} | ${[3, 5, 3]}
        ${[1, 2, 3]} | ${[2, 3, 4]} | ${[3, 5, 7]}
        ${[1, 2, 3]} | ${[2, 3, 4]} | ${[3, 5, 7]}
        ${[1, 2, 3]} | ${[2, 3, 4]} | ${[3, 5, 7]}
        ${[1, 2]} | ${[2, 3]} | ${[3, 5]}
        ${[1, 2, 3]} | ${[2, 3, 4]} | ${[3, 5, 7]}
        ${[1]} | ${[2]} | ${[3]}
        ${[1, 2, 3, 4, 5, 6]} | ${[2, 3, 4, 5, 6, 7]} | ${[3, 5, 7, 9, 11, 13]}
    `('La suma de $inicial y $final es $result', ({ inicial, final, result }) => {
        const lista = numerosEntreInicialYFinal(inicial, final);
        expect(lista).toEqual(result);
    });
});