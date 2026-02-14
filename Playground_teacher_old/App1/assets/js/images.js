'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';


let seeder = new seedGenerator();

let pets = [];
for (let index = 0; index < 10; index++) {
    
    let animalType = seeder.fromString("bear, elephant, parrot, penguin, zebra");
    pets.push({name: seeder.petName, age: randomNumber(0,20), type: animalType,
        imgSrc: `../img/${animalType}.png`});
}


let album = document.querySelector(".ImgAlbum");

for (const pet of pets) {

    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src =  pet.imgSrc;
    div1.appendChild(img);

    let p = document.createElement("p");
    p.innerText = `I'm ${pet.name}. I am a ${pet.age} year old ${pet.type}`;

    let imgItem = document.createElement("div");
    imgItem.classList.add("ImgItem");
    imgItem.appendChild(div1);
    imgItem.appendChild(p);
    album.append(imgItem);
}