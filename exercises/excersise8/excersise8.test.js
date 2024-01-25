const mod = require("./index.js");

describe('Ataque pasivo en League of Legends', () => {
    beforeEach(() => {
        // Simula las funciones y restablece las simulaciones antes de cada test
        jest.spyOn(mod, 'getEnemiesInRange').mockClear();
        jest.spyOn(mod, 'basicAttack').mockClear();
        mod.getEnemiesInRange.mockImplementation(jest.fn());
        mod.basicAttack.mockImplementation(jest.fn());
    });

    afterEach(() => {
        // Restaura las funciones originales después de cada test
        jest.restoreAllMocks();
    });

    test('Ataca a todos los enemigos en el rango uno por uno', () => {
        const rangeOfChampion = 10;
        const damage = 50;
        const mockEnemiesFirstCall = ["caitlyn", "yasuo", "minionGordo"];
        const mockEnemiesSecondCall = ["yasuo", "minionGordo"];
        const mockEnemiesThirdCall = ["yasuo"];

        mod.getEnemiesInRange.mockReturnValueOnce(mockEnemiesFirstCall)
                            .mockReturnValueOnce(mockEnemiesSecondCall)
                            .mockReturnValueOnce(mockEnemiesThirdCall)
                            .mockReturnValueOnce([]);

        mod.passiveAttack(rangeOfChampion, damage);

        expect(mod.basicAttack).toHaveBeenNthCalledWith(1, "caitlyn", damage);
        expect(mod.basicAttack).toHaveBeenNthCalledWith(2, "yasuo", damage);
        expect(mod.basicAttack).toHaveBeenNthCalledWith(3, "minionGordo", damage);
    });

    // Los demás tests siguen aquí...
});
