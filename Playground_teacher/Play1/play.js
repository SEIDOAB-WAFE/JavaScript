'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../SeidoHelpers/seido-helpers.js';

let greetings = 'Hello';
console.log(greetings);

const name = "Martin";
console.log(`${greetings} ${name}`);


let phone = "1234-1234";
console.log(`${greetings} ${name} your phone nr is ${phone}`);

let friend = {name: "Alfred", phone: "5678-5678"};
console.log(friend);
console.log(`${greetings} ${friend.name} your phone nr is ${friend.phone}`);


friend.city = "Stockholm";
console.log(friend);


let another_friend = {name: "Ashop", phone: "123-444", city: "Malmo"};
another_friend["Devran"] = "Halloj";

console.log(another_friend);

const a = [friend, another_friend, {name: "Sania", phone: "000-1123",}]


for (let index = 0; index < 10; index++) {
    a.push({name:"Tom"});
}

console.log(a);

let seeder = new seedGenerator();
console.log(seeder.petName);

console.log(randomNumber(0,1000));

let pets = [];
for (let index = 0; index < 50; index++) {
    
    pets.push({name: seeder.petName, age: randomNumber(0,20) });
}

pets.forEach(pet => console.log(`${pet.name} is ${pet.age} years old.`));
