'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';


let stringTest = '42';

let numberTest = 42;
let numberAsString = numberTest + '';

const blankTest = '';
const nullTest = null;
const wrappedTest = new String('42');

console.log(typeof stringTest);
console.log(typeof numberTest);
console.log(typeof number2);
console.log(typeof wrappedTest);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);


console.log('\nBasic string test');
if (typeof stringTest === 'string') {
  console.log('stringTest is a string');
}
if (typeof numberTest === 'string') {
  console.log('numberTest is a string');
}
if (typeof blankTest === 'string') {
  console.log('blankTest is a string');
}
if (typeof nullTest === 'string') {
  console.log('nullTest is a string');
}
if (typeof wrappedTest === 'string') {
  console.log('wrappedTest is a string');
}


console.log('\nUNSAFE way to Test for content in a string');
if (stringTest) { // try numberTest
  console.log('DANGER! sloppy stringTest');
}

console.log('\nSafe way to Test for content in a string');
if (typeof stringTest === 'string' && stringTest.length > 0) {
  console.log('stringTest is a string with text');
}
if (typeof blankTest === 'string' && blankTest.length > 0) {
  console.log('blankTest is a string with text');
}
if (typeof nullTest === 'string' && nullTest.length > 0) {
  console.log('nullTest');
}
if (typeof wrappedTest === 'string' && wrappedTest.length > 0) {
  console.log('wrappedTest');
}


console.log('\nDANGER zone because of truthy and falsy');
//Do not use sloppy js coding using truthy and falsy to test
stringTest = undefined;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = null;
console.log(!stringTest); // truthy - Correct, it is not a string

stringTest = "a string";
console.log(!stringTest); // falsy - Correct, it is a string

//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';

//But here such a test becomes wrong due to js truthy and falsy nature
stringTest = "Martin";
if (stringTest)
  console.log("is a string");

stringTest = "";
if (stringTest)
  console.log("But it is still a string");

stringTest = 5;
if (stringTest)
  console.log("It is no longer a string");


console.log('\nTest for other types')
numberTest = 5;
if (typeof numberTest === 'number' && !Number.isNaN(numberTest)) {
  console.log(`${numberTest} is a valid number`);
}


//Use negation to test for wrong parameters in a function, this is a common pattern in js code, 
//but be careful to use it correctly.
//Hint, test for what it should be, then negate and return.

function myFunc1(myParam) {
  
  //myParam1 MUST be a non-empty string

  //validation using negation pattern
  if (!(typeof myParam === 'string' && myParam.length > 0)) {

    console.log("\nwrong type - cannot run the algorithm");
    return;
  }

  //is'all good man
  console.log("\nNon empty string - do the algorithm");
}

myFunc1("Martin");
myFunc1("");
myFunc1(5);
myFunc1(0);


function myFunc2(myParam1, myParam2) {

  //myParam1 MUST be a non-empty string
  //myParam2 MUST be a valid number

  //validation using negation pattern
  if (!(typeof myParam1 === 'string' && myParam1.length > 0)) {
    console.log("myParam1 is a wrong parameter"); 
    return;
  }
  if (!(typeof myParam2 === 'number' && !Number.isNaN(myParam2))) {
    console.log("my Param2 is a wrong parameter"); 
    return;
  }

  //is'all good man
  console.log("myParam1 is a non-empty string and myParam2 is a valid number");
}

myFunc2(5, 5);
myFunc2("5", 5);
myFunc2("5", NaN);


/* Exercises

1. write a function that takes 4 parameters, 
  first parameter must be a non-empty object,
  second parameter must be a non-empty string,
  third parameter must be a valid number,
  fourth parameter must be a boolean. 
  
  The function should test for the correct types of each parameter and return true if all parameters are correct, otherwise false.
  Use the negation pattern to test for wrong parameters and return false, then return true at the end of the function if all parameters are correct.

2. Modify first parameter so it must be a non-empty object containing a specific property, for example 'name'.
*/