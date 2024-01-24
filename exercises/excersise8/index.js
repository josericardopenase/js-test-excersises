var firstTime = -1

function attack(enemy, damage){
}

function getEnemiesInRange(range){
    firstTime+=1
    if(firstTime == 0)
        return ["caitlyn", "yasuo", "minionGordo"]
    if(firstTime == 1)
        return ["yasuo", "minionGordo"]
    if(firstTime == 2)
        return ["yasuo", "minionGordo"]
    return ["yasuo"]
}

function passiveAttack(rangeOfChampion, attack){
}

module.exports = passiveAttack;