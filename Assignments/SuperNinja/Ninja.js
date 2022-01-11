

class Ninja {
    constructor(name, health, speed,strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`Displaying Stats for ${this.name}:
        Health: ${this.health}
        Strength: ${this.strength}
        Speed: ${this.speed}`)
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank Sake, gained 10 HP! `)
    }
}


class Sensei extends Ninja {
    constructor(name){
        super(name, 200, 10, 10)
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log(`${this.name} says: What one programmer can do in a month, two programmers can do in two months.`)
    }
}

const Mush = new Ninja("Musashi", 30)

const Master = new Sensei("Hyabusa");

Master.showStats();

Master.speakWisdom();

Mush.showStats();

Mush.drinkSake();

Mush.showStats();

