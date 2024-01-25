function basicAttack(enemy, damage){
}

function getEnemiesInRange(range){
}


function passiveAttack(rangeOfChampion, damage) {
    let enemies = getEnemiesInRange(rangeOfChampion);
    
    while (enemies.length > 0) {
        console.log(enemies)
        // Ataca al enemigo más cercano
        basicAttack(enemies[0], damage);

        // Actualiza la lista de enemigos después del ataque
        enemies = getEnemiesInRange(rangeOfChampion);
        console.log(enemies)
    }
}
module.exports = {
    passiveAttack,
    getEnemiesInRange,
    basicAttack
};