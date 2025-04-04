class Pokemon {
    //making variables private
    #name;
    #hp;
    #level;
    #type;

    constructor (name, hp, level, type) {
        this.#name = name;
        this.#hp = hp;
        this.#level = level;
        this.#type = type;
    };

    getName () {
        return this.#name;
    }
    setName (newname) {
        this.#name = newname;
    }
    getHp () {
        return this.#hp;
    }
    setHp (newHp) {
        this.#hp = newHp;
        if (this.#hp < 0) { this.#hp = 1}
    }
    getLevel () {
        return this.#level;
    }
    setLevel (newLevel) {
        this.#level = newLevel;
    }
    getType () {
        return this.#level;
    }
    setType (newType) {
        this.#level = newType;
    }

    info () {
        return console.log(`${this.#name} possède ${this.#hp}, il est de niveau ${this.#level} et son type est ${this.#type}`);
    }

    attack (otherPokemeon) {
        const result = this.#level - otherPokemeon.level;
        if (result < 0) {
            console.log(`vous avez gagné le combat`);
        } else if (result == 0) {
            console.log(`match nul`);
        } else {
            console.log(`vous avez perdu`);
        }
    }

    class FirePokemon extends Pokemon{
        constructor(name, hp, level) {
            super(name, hp, level);
            this.type = "fire";
        }

        attack (otherPokemeon) {
            if (otherPokemeon.type === "water") {
                otherPokemeon.#level += 5;
            }
        }
    }
}

const pikachu = new Pokemon("pikachu", 100, 10, "electrik");
const carapuce = new Pokemon("carapuce", 100, 12, "water");
const goupix = new Pokemon("goupix", 100, 15, "fire")
const germignon = new Pokemon("germignon", 100, 8, "grass")


