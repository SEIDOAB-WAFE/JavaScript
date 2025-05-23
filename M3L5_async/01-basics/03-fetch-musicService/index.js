//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  

import musicService from'./music-group-f-service.js';

(async () => {

  //Initialize the service
  const _service = new musicService(`https://seido-webservice-307d89e1f16a.azurewebsites.net/api`);

  //Read Database info async
  let data = await _service.readInfoAsync();
  console.log(data);

  //Read all groups
  data = await _service.readMusicGroupsAsync(0, true, "queen" ,20);
  //data = await _service.readMusicGroupsAsync(1, false);
  console.log(`The database contains\n ${data.dbItemsCount} items`);
  console.log(` ${data.pageCount} pages of maximum ${data.pageSize} items per page`);

  //List the items in the page
  console.log(`Items in page ${data.pageNr}`);
  data.pageItems.forEach(item => { console.log(item) });

  //Read Specific group
  data = await _service.readMusicGroupAsync(data.pageItems[0].musicGroupId)
  console.log(data);

  //create a new music group
  let newItem = {
    "musicGroupId": null,
    "name": "Awsome Metallica",
    "establishedYear": 2024,
    "genre": 1,
    "albumsId": [],
    "artistsId": []
  };
  data = await _service.createMusicGroupAsync(newItem)
  console.log(data);

  const musicgroupId = data.musicGroupId;
  //create an album to the newly created music group
  newItem = {
    "albumId": null,
    "seeded": true,
    "name": "Fire and ice on a mountain of snow",
    "releaseYear": 2024,
    "copiesSold": 100,
    "musicGroupId": `${musicgroupId}`
  }
  data = await _service.createAlbumAsync(newItem)
  console.log(data);
  
  //create an artist to the newly created music group
  newItem = {
  "artistId": null,
  "seeded": true,
  "firstName": "Huckleberry",
  "lastName": "Finn",
  "birthDay": "1964-01-02",
  "musicGroupsId": [
    `${musicgroupId}`
    ]
  }
  data = await _service.upsertArtistAsync(newItem)
  console.log(data);

  //change the name of the newly created music group
  data = await _service.readMusicGroupDtoAsync(musicgroupId)
  data.name = data.name.replace(`Metallica`, `Toppiwhoppy`);
  data = await _service.updateMusicGroupAsync(musicgroupId, data)
  console.log(data);

  //remove the newly created music group
  data = await _service.deleteMusicGroupAsync(musicgroupId)
  console.log(data);

  //#region Just to show the same code pattern to work with Artists and Albums
  console.log(data = await _service.readAlbumsAsync(0));
  console.log(await _service.readAlbumAsync(data.pageItems[0].albumId));

  data = await _service.readAlbumDtoAsync(data.pageItems[0].albumId)
  data.name = `Willy Wonka sings about chocolate`;
  console.log(await _service.updateAlbumAsync(data.albumId, data));

  console.log(await _service.deleteAlbumAsync(data.albumId));

  console.log(data = await _service.readArtistsAsync(0));
  console.log(await _service.readArtistAsync(data.pageItems[0].artistId));

  data = await _service.readArtistDtoAsync(data.pageItems[0].artistId)
  data.firstName = `Willy`;
  data.lastName = `Wonka`;
  console.log(await _service.updateArtistAsync(data.artistId, data));

  console.log(await _service.deleteArtistAsync(data.artistId));
  //#endregion

})();

