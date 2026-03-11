'use strict';
import {seedGenerator, uniqueId, randomNumber, randomDecimal, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js'

//test that scripts are working
console.log("Hello world");
for (let index = 0; index < 10; index++) {
    console.log(index);

}

// data generation
const nrImages = 10;
const images = [];
for (let i = 0; i < nrImages; i++) {
    const image = {
        id: uniqueId(),
        //imgSrc: //from seedgenerato
        //imgText: //seedgeneratot
    }
    images.push(image)
}



// image rendering
const imageList = document.querySelector('#imageList');

const imageItem = document.createElement("div");
imageItem.classList.add("ImgItem");


const p = document.createElement("p");
imageItem.appendChild(p);

imageList.appendChild(imageItem);