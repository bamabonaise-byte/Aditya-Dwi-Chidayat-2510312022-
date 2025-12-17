let enemy = null;
let inBattle = false;

function startBattle() {
    enemy = { name:"Dark Beast", emoji:"👹", health:80, attack:15 };
    inBattle = true;

    battleCard.style.display = "block";
    playerFighter.textContent = myPet.emoji;
    enemyFighter.textContent = enemy.emoji;

    updateBattle();
    addLog("Battle dimulai", "log-battle");
}

function attack() {
    enemy.health -= myPet.attack;
    enemyTurn();
}

function enemyTurn() {
    myPet.health -= enemy.attack;
    updateBattle();
}

function updateBattle() {
    playerBattleHP.textContent = myPet.health;
    enemyBattleHP.textContent = enemy.health;

    if (enemy.health <= 0) endBattle();
}

function endBattle() {
    inBattle = false;
    battleCard.style.display = "none";
    updateUI();
}
