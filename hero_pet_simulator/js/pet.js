class Pet {
    constructor(name, type, emoji) {
        this.name = name;
        this.type = type;
        this.emoji = emoji;
        this.energy = 76;
        this.health = 100;
        this.maxHealth = 100;
        this.attack = 25;
        this.level = 1;
    }

    eat(value) {
        this.energy = Math.min(100, this.energy + value);
        return `${this.name} makan +${value} energy`;
    }

    heal(value) {
        this.health = Math.min(this.maxHealth, this.health + value);
        return `${this.name} heal +${value} HP`;
    }

    increaseAttack(value) {
        this.attack += value;
        return `Attack +${value}`;
    }
}
