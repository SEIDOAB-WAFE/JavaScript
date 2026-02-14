'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js';

const seeder = new seedGenerator();

/*
const prot = {toString: function () {return `${this.firstname} likes ${this.quote} And ${this.latin}`}};

//Create 10 objects, initiated by seeder
const array =[];
for (let index = 0; index < 10; index++) {
    const o = {firstname: seeder.firstName, quote:seeder.quote.quote, latin: seeder.latinSentence};
    Object.setPrototypeOf(o, prot);
    array.push(o);        
}
*/
//Print them to console
//array.forEach(o => console.log(o.toString()));  

//My Model
export function person(seeder) {

    this.firstname = seeder.firstName, 
    this.quote = seeder.quote.quote,
    this.latin = seeder.latinSentence

    this.getSeveral = function (nrItems){

        const array1 =[];
        for (let index = 0; index < nrItems; index++) {

            const p = new person(seeder);
            array1.push(p);
        }
        return array1;
    }

    person.prototype =  {
        toString: function () {return `${this.firstname} likes \"${this.quote}". ${this.latin}`}
    }
}


//Test code
const array2 = new person(seeder).getSeveral(10);
array2.forEach(o => console.log(o));