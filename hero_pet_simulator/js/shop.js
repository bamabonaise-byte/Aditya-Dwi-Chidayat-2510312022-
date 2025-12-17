function updateUI() {
    petName.textContent = myPet.name;
    petType.textContent = myPet.type;
    petAvatar.textContent = myPet.emoji;

    healthValue.textContent = `${myPet.health}/${myPet.maxHealth}`;
    healthBar.style.width = (myPet.health / myPet.maxHealth) * 100 + "%";

    energyValue.textContent = `${myPet.energy}/100`;
    energyBar.style.width = myPet.energy + "%";

    attackValue.textContent = myPet.attack;
    attackBar.textContent = `Lvl ${myPet.level}`;

    coins.textContent = coins;
}

function addLog(msg, type="") {
    const div = document.createElement("div");
    div.className = `log-entry ${type}`;
    div.textContent = msg;
    log.prepend(div);
}
