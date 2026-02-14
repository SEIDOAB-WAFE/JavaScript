'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';

let seeder = new seedGenerator();

let pets = [];
for (let index = 0; index < 10; index++) {
    
    pets.push({name: seeder.petName, age: randomNumber(0,20) });
}


let table = document.querySelector(".TableContainer");
for (const pet of pets) {

    let div = document.createElement("div");
    div.innerText = pet.name;
    div.classList.add("TableItem");
    table.appendChild(div);
}
