'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';


// Strings with escape sequences
const favoriteMovie = "My favorite movie is \"The Seventh Seal\".";
console.log(favoriteMovie);

const copyrightNotice = 'This page \u00A9 Shelley Powers.';
console.log(copyrightNotice);
console.log(`${'\u00A9'}.length is ${'\u00A9'.length}`); // \u00A9 is a single character, 

// Strings with emojis
//choose your favorite emoji at https://unicode-table.com/en/sets/top-emoji/

const sunglasses = String.fromCodePoint(0x1F60E); // 😎 smiling face with sunglasses, using old syntax
const pumkin = '\u{1F383}'; // 🎃 same as above, but with ES6 syntax
const hamburger = '🍔';
console.log(`🍔 length: ${hamburger.length}`);  // Note the string length, every emoji is stored as a 4-byte value. 
const hamburgerStory = `I like hamburgers like ${hamburger} and ${'\u{1F383}'}`;
console.log(hamburgerStory);

// Template literals
const firstName = 'Annie';
const lastName = 'Harker';
const hireDate = new Date('2020', 5, 22);
const employeeDetail = `Our team includes ${firstName} ${lastName}. They've been a team member since ${hireDate}!`;
console.log(employeeDetail);

// Due to template literals, I find it easier to always use `` for string literals