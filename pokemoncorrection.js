class Pokemon {

    // Private properties
    #name; // name of the Pokémon
    #hp; // points de vie
    #level; // niveau
    #_type; // essence élémentaire du Pokemon

    constructor(name, hp, level, _type) {
        this.#name = name;
        this.#hp = hp;
        this.#level = level;
        this.#_type = _type;
    }

    static log(message) {
        const format = `\n--------------\n${message}\n--------------\n`
        console.log(format);
    }

    // Getter/Setter of privates properties
    get name() {
        return this.#name;
    }
    set name(newname) {
        this.#name = newname;
    }
    get hp() {
        return this.#hp;
    }
    set hp(newhp) {
        if (this.hp < 0) return // HP can't be negative
        this.#hp = newhp;
    }
    get level() {
        return this.#level;
    }
    set level(newlevel) {
        this.#level = newlevel;
    }
    get _type() {
        return this.#_type;
    }
    set _type(new_type) {
        this.#_type = new_type;
    }

    info() {
        const info = `Pokemon Info\n--------------\nName: ${this.name}\nType: ${this._type}\nLevel: ${this.level}\nHP: ${this.hp}`;
        return Pokemon.log(info)
    }

    attack(opponentPokemon) {
        const log = `${this.name} a attaqué ${opponentPokemon.name} !`
        return Pokemon.log(log)
    }
}

class FirePokemon extends Pokemon {
    constructor(name, hp, level) {
        super(name, hp, level);
        this._type = "Fire";
    }

    attack(opponentPokemon) {
        super.attack(opponentPokemon)
        if (opponentPokemon._type === "Grass") {
            opponentPokemon.hp -= 2;
        } else if (opponentPokemon._type === "Water") {
            opponentPokemon.hp -= 0.5;
        }
    }

    blazeAbility(opponentPokemon) {
        if (this.hp < 5) {
            opponentPokemon.hp -= 3;
        }
    }

    cry() {
        const cry = "Ah"
        console.log(cry);
    }
}

class WaterPokemon extends Pokemon {
    constructor(name, hp, level) {
        super(name, hp, level);
        this._type = "Water";
    }

    attack(opponentPokemon) {
        super.attack(opponentPokemon)
        if (opponentPokemon._type === "Fire") {
            opponentPokemon.hp -= 2;
        } else if (opponentPokemon._type === "Grass") {
            opponentPokemon.hp -= 0.5;
        }
    }

    torrentAbility() {
        if (this.hp < 5) {
            this.hp += 3;
        }
    }

    cry() {
        const cry = "oh";
        Pokemon.log(cry)
    }
}

class GrassPokemon extends Pokemon {
    constructor(name, hp, level) {
        super(name, hp, level);
        this._type = "Grass";
    }

    attack(opponentPokemon) {
        super.attack(opponentPokemon)
        if (opponentPokemon._type === "Water") {
            opponentPokemon.hp -= 2;
        } else if (opponentPokemon._type === "Fire") {
            opponentPokemon.hp -= 0.5;
        }
    }

    photosynthesis() {
        this.hp += 1;
    }

    cry() {
        const cry = "Uh";
        console.log(cry);
    }
}

class Trainer {
    #name;
    #_squad;

    constructor(name, _squad) {
        this.#name = name;
        this.#_squad = _squad;
    }

    get name() {
        return this.#name;
    }
    set name(newname) {
        this.#name = newname;
    }
    get _squad() {
        return this.#_squad;
    }
    set _squad(new_squad) {
        this.#_squad = new_squad;
    }

    add_to_squad(Pokemon) {
        return this._squad.push(Pokemon);
    }
}

const dracofeu  = new FirePokemon("DracoFeu", 8, 1);
const tortank = new WaterPokemon("Tortank", 12, 1)
const bulbasaur = new GrassPokemon("Bulbasaur", 10, 1)

dracofeu.info()