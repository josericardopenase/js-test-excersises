const calculateIMC = require("./index.js");

describe('Calculadora de IMC y perfil nutricional', () => {
    test.each`
        peso   | altura | imcEsperado | perfilEsperado
        ${70}  | ${1.75} | ${"22.86"} | ${"Normal"}
        ${50}  | ${1.60} | ${"19.53"} | ${"Bajo peso"}
        ${90}  | ${1.70} | ${"31.14"} | ${"Obesidad en primer grado"}
        ${120} | ${1.80} | ${"37.04"} | ${"Obesidad en segundo grado"}
        ${150} | ${1.90} | ${"41.55"} | ${"Obesidad en tercer grado"}
    `('debería calcular el IMC $imcEsperado y perfil $perfilEsperado para un peso de $peso kg y altura de $altura m', ({ peso, altura, imcEsperado, perfilEsperado }) => {
        const {imc, profile} = calculateIMC(peso, altura);
        expect(imc).toBe(imcEsperado);
        expect(profile).toBe(perfilEsperado);
    });
});