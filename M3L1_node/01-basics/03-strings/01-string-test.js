'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';


let stringTest = '42';
let numberTest = 42;
const blankTest = '';
const nullTest = null;
const wrappedTest = new String('42');

console.log(typeof stringTest);
console.log(typeof numberTest);
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
if (stringTest) {
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


function myFunc1(myParam) {
  
  //myParam1 should be a non-empty string
  if (!(typeof myParam === 'string' && myParam.length > 0)) {

    console.log("\nwrong type - cannot run the algorithm");
    return;
  }

    console.log("\nNon empty string - do the algorithm");
}

myFunc1("Martin");
myFunc1("");
myFunc1(5);
myFunc1(0);


function myFunc2(myParam1, myParam2) {

  //myParam1 should be a non-empty string
  //myParam2 should be a valid number

  if (!(typeof myParam1 === 'string' && myParam1.length > 0)) {
    console.log("myParam1 is a wrong parameter"); 
    return;
  }
  if (!(typeof myParam2 === 'number' && !Number.isNaN(myParam2))) {
    console.log("my Param2 is a wrong parameter"); 
    return;
  }

  console.log("myParam1 is a non-empty string and myParam2 is a valid number");

}

myFunc2(5, 5);
myFunc2("5", 5);
myFunc2("5", NaN);


/* Exercises

1. write code that: declare a variable myVar without assigning a value to it; 
   write to the console myVar and the typeof myVar, 
2. write code to check if myVar is an non-empty string, using safe way to test for content as above
3. write code to check if myVar is an non-empty string, using sloppy if (myVar)

4. run the code in 2 and 3 with myVar unassigned and with valid number. See how sloppy test fails, why?

5. write code to test i myVar is a valid number;
*/