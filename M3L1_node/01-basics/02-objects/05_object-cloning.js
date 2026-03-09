'use strict';

let o = {firstname: 'John', lastname: "Doe", age: '40', address: {city: 'Gavle'}};

// console.log('reference copy');
// let p = o;
// p.age = 50;
// p.favoritecolor = 'blue';
// p.address.city = 'Malmoe';
// console.log(o);
// console.log(p);

//shallow copy, both persons moved to Stockholm
// console.log('shallow copy');
// let q = {...o};

// q.firstname = 'Harry';
// q.lastname = 'Dynamit';
// q.age = 60;
// q.address.city = 'Stockholm';

// console.log(o, o.address.city);
// console.log(q, q.address.city);


//deep copy, alla properties are copied, including address
// console.log('deep copy');
// let r = {...o, address:{...o.address}};
// r.firstname = 'Harry';
// r.lastname = 'Dynamit';
// r.age = 60;
// r.address.city = 'Stockholm';

// console.log(o, o.address.city);
// console.log(r, r.address.city);


//simpler way to make deep copy that works at all levels
//let tmp = JSON.stringify(o)
let s = JSON.parse(JSON.stringify(o));

s.firstname = 'Harry';
s.lastname = 'Dynamit';
s.age = 60;
s.address.city = 'Stockholm';

console.log(o, o.address.city);
console.log(s, s.address.city);
