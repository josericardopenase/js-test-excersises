const esPrimo = require("./index.js");

describe('Calculadora de si es primo', () => {
    test.each`
        num   | result
        ${10}  | ${false} 
        ${5}  | ${true} 
        ${15}  | ${false} 
        ${30}  | ${false} 
        ${0}  | ${false} 
        ${100}  | ${false} 
        ${2}  | ${true}
        ${3}  | ${true}
        ${7}  | ${true}
        ${11}  | ${true}
        ${13}  | ${true}
        ${17}  | ${true}
        ${19}  | ${true}
        ${23}  | ${true}
        ${29}  | ${true}
        ${31}  | ${true}
        ${37}  | ${true}
        ${41}  | ${true}
        ${43}  | ${true}
        ${47}  | ${true}
        ${50} | ${false}
        ${51} | ${false}
        ${52} | ${false}
        ${53} | ${true}
        ${54} | ${false}
        ${55} | ${false}
        ${56} | ${false}
        ${57} | ${false}
        ${58} | ${false}
        ${59} | ${true}
    `('Con el numero $num el resultado deberia ser \n $result', ({ num, result }) => {
        const lista = numerosPrimos(num);
        expect(lista).toEqual(result);
    });
});