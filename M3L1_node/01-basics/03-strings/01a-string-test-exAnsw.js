'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy, isEqual} from '../../../SeidoHelpers/seido-helpers.js';


function myFunc1(param1, param2, param3, param4) {

  //validation using negation pattern
  if (!(typeof param1 === 'object' && Object.keys(param1).length > 0)) {
    console.log('param1 is not a non-empty object');
    return false;
  }
  if (!(typeof param2 === 'string' && param2.length > 0)) {
    console.log('param2 is not a non-empty string');
    return false;
  }
  if (!(typeof param3 === 'number' && !Number.isNaN(param3))) {
    console.log('param3 is not a valid number');
    return false;
  }
  if (typeof param4 !== 'boolean') {
    console.log('param4 is not a boolean');
    return false;
  }

  //is'all good man
  return true;
}

function myFunc2(param1, param2, param3, param4) {

  //validation using negation pattern
  if (!(typeof param1 === 'object' && Object.keys(param1).length > 0)) {
    console.log('param1 is not a non-empty object');
    return false;
  }
  if (!('name' in param1)) {
    console.log('param1 does not contain the required property "name"');
    return false;
  }
  if (!(typeof param2 === 'string' && param2.length > 0)) {
    console.log('param2 is not a non-empty string');
    return false;
  }
  if (!(typeof param3 === 'number' && !Number.isNaN(param3))) {
    console.log('param3 is not a valid number');
    return false;
  }
  if (typeof param4 !== 'boolean') {
    console.log('param4 is not a boolean');
    return false;
  }
  
  //is'all good man
  return true;
}



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