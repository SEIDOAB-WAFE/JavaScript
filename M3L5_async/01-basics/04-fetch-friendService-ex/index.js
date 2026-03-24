//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

import friendService from'./friendService.js';

(async () => {

  //Initialize the service
  const _service = new friendService(`https://friends.api.public.seido.se/api`);

  //Read Database info async
  let data = await _service.readInfoAsync();
  console.log(data);
  
  //Read all friends

  //Read Specific friend

  //create a new friend
  let newItem = {
    "friendId": null,
    "firstName": "your name here",
    "lastName": "your last name here",
    "birthDay": "1990-01-01",
    "friendsId": [],
    "petsId": []
  };

  //change the name of the newly created friend

  //remove the newly created friend

})();

// Exercise: 
// Implement the methods in friendService.js and use them in index.js to read, create, update and delete friends from the database. 
// Use the music service example as a template for how to use the methods in friendService.js.
