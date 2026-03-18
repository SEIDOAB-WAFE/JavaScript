'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';

// Parent Constructor
function Animal(name) {
    this.name = name;

    this.sayHello = function () {
        console.log(`Hello, I am ${this.name} a ${this.breed}!`);
    };
    this.makeSound = function () {console.log(`${this.name}, a ${this.breed}, says: ${this.sound}`)};
}

// Child Constructor
function Dog(name, breed) {

    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = "Woof! Woof!";
}

function Cat(name, breed) {

    //Inheritance - Call Parent Constructor and assigning Animal to this
    Animal.call(this, name); 

    this.breed = breed;
    this.sound = "Miau!";
}

const myAnimal = new Animal("Generic Animal");
myAnimal.sayHello();  
myAnimal.makeSound();

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.sayHello();  
myDog.makeSound();  

const myCat = new Cat("Charlie", "Small Tiger");
myCat.sayHello();
myCat.makeSound();

