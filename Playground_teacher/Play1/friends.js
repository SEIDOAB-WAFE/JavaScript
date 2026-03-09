'use strict';
import {seedGenerator, uniqueId, randomNumber, deepCopy} from '../../SeidoHelpers/seido-helpers.js';

let seeder = new seedGenerator();

let friends = [];
for (let index = 0; index < 50; index++) {
    
    const f = {firstName: seeder.firstName, lastName: seeder.lastName};
    f.address = { country: 'Sweden',
                  city: seeder.city('Sweden'),
                  streetName: seeder.street('Sweden')};
    friends.push(f);
}


friends.forEach(friend => 
    console.log(`${friend.firstName} ${friend.lastName} lives in ${friend.address.city}, ${friend.address.country} on ${friend.address.streetName}`));


const friendList = document.querySelector('#friend-list');
friends.forEach(friend => {
    const li = document.createElement('li');
    li.innerText = `${friend.firstName} ${friend.lastName} lives in ${friend.address.city}, ${friend.address.country} on ${friend.address.streetName}`;
    friendList.appendChild(li);
});
