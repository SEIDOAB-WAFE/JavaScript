'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../../../SeidoHelpers/seido-helpers.js';

let seeder = new seedGenerator();

//fill the initial data
let pets = [];
for (let index = 0; index < 100; index++) {
    
    pets.push({name: seeder.petName, age: randomNumber(0,20), petId:  uniqueId()});
}


const btnPrev = document.querySelector("#btnPrev");
const btnNext = document.querySelector("#btnNext");
const table = document.querySelector(".TableContainer");

//Paging
const _pageSize = 12;
const _MaxNrpages = Math.ceil(pets.length/_pageSize);
let _pageNr = 0;

//Draw table
drawTable();




btnPrev.addEventListener("click", ()=>{

    if (_pageNr > 0)
    {
        _pageNr--;
        emptyTable();
        drawTable();
    }

})
btnNext.addEventListener("click", ()=>{

    if (_pageNr < _MaxNrpages-1)
    {
        _pageNr++;
        emptyTable();
        drawTable();
    }
  
})

function drawTable() {
    for (const pet of pets.slice(_pageNr * _pageSize, _pageNr * _pageSize + _pageSize)) {

        let div = document.createElement("div");
        div.innerText = pet.name;
        div.classList.add("TableItem");
        div.dataset.petId = pet.petId;
        
        div.addEventListener('click', (e) => {
        
           console.log(e.target.innerText);
           window.location.href = `./about.html?petname=${e.target.innerText}&petid=${e.target.dataset.petId}`;
        })
        
        
        table.appendChild(div);
    }
}

function emptyTable() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}
