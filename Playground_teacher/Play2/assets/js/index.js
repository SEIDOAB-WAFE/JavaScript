'use strict';
import {person} from './person.js';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../../SeidoHelpers/seido-helpers.js';

const seeder = new seedGenerator();
const list = document.querySelector("#friends");

new person(seeder).getSeveral(10).forEach(element => {

  const li = document.createElement("li");
  li.innerText = element.toString();
  list.appendChild(li);
});