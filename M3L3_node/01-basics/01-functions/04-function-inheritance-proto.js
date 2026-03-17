'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

function Animal(name) {
    this.name = name;
}

Animal.prototype.sayHello = function () { console.log(`Hello, I am ${this.name} a ${this.breed}!`);};
Animal.prototype.makeSound = function () {console.log(`${this.name}, a ${this.breed}, says: ${this.sound}`)};


function Dog(name, breed) {
    
    //Inheritance step1 - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name);
    this.breed = breed;

    this.sound = "Woof! Woof!";
}

//Inheritance step2 - Set child prototype to parent prototype
Dog.prototype = Object.create(Animal.prototype);


function Cat(name, breed) {

    //Inheritance step1 - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = "Miau!";
}

//Inheritance step2 - Set child prototype to parent prototype
Cat.prototype = Object.create(Animal.prototype);


const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  
myDog.makeSound(); 

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.makeSound();

