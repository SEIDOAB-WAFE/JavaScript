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
  data = await _service.readFriendsAsync(0, true, null ,10);
  console.log(`The database contains\n ${data.dbItemsCount} items`);
  console.log(` ${data.pageCount} pages of maximum ${data.pageSize} items per page`);

  //List the items in the page
  console.log(`Items in page ${data.pageNr}`);
  data.pageItems.forEach(item => { console.log(item) });

  //Read Specific friend
  data = await _service.readFriendAsync(data.pageItems[0].friendId)
  console.log(data);

  //create a new friend
  let newItem = {
    "friendId": null,
    "firstName": "John",
    "lastName": "Doe",
    "birthDay": "1990-01-01",
    "friendsId": [],
    "petsId": []
  };
  data = await _service.createFriendAsync(newItem)
  console.log(data);

  //change the name of the newly created friend
  data = await _service.readFriendDtoAsync(data.item.friendId)
  data.item.firstName = 'Alice';
  data.item.lastName = 'Wonder';
  data = await _service.updateFriendAsync(data.item.friendId, data.item)
  console.log(data);

  //remove the newly created friend
  console.log(await _service.deleteFriendAsync(data.item.friendId));

})();

