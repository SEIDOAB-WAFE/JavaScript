'use strict'; 

function friendService (url) {

    //constructor
    this.url = url;

    //#region generic CRUD methods, in function cannot ber private
    this._myFetch = async function (url, method = null, body = null) {
      try {
    
        method ??= 'GET';
        let res = await fetch(url, {
          method: method,
          headers: { 'content-type': 'application/json' },
          body: body ? JSON.stringify(body) : null
        });
    
        if (res.ok) {
    
          console.log(`\n${method} Request successful @ ${url}`);
    
          //get the data from server
          let data = await res.json();
          return data;
        }
        else {
    
          //typcially you would log an error instead
          console.log(`Failed to recieved data from server: ${res.status}`);
          alert(`Failed to recieved data from server: ${res.status}`);
        }
      }
      catch (err) {
    
        //typcially you would log an error instead
        console.log(`Failed to recieved data from server: ${err.message}`);
        alert(`Failed to recieved data from server: ${err.message}`);
      }
    }

    this._readItemsAsync = async function (reqUrl, pageNr, flat, filter, pageSize)
    {
      reqUrl += `?flat=${flat}&pageNr=${pageNr}&pageSize=${pageSize}`;
      if (filter != null)
      {
        reqUrl += `&filter=${filter}`
      }
      let data = await this._myFetch(reqUrl);
      return data;
    }
    
    this._readItemAsync = async function (reqUrl, id, flat)
    {
      reqUrl += `?flat=${flat}&id=${id}`;
      let data = await this._myFetch(reqUrl);
      return data;
    }

    this._readItemDtoAsync = async function (reqUrl, id, flat)
    {
      reqUrl += `?id=${id}`;
      let data = await this._myFetch(reqUrl);
      return data;
    }

    this._updateItemAsync = async function (reqUrl, id, newItem)
    {
      reqUrl += `/${id}`;
      let data = await this._myFetch(reqUrl, 'PUT', newItem);
      return data;
    }

    this._createItemAsync = async function (reqUrl, newItem)
    {
      let data = await this._myFetch(reqUrl, 'POST', newItem);
      return data;
    }

    this._deleteItemAsync = async function (reqUrl, id)
    {
      reqUrl += `/${id}`;
      let data = await this._myFetch(reqUrl, 'DELETE');
      return data;
    }

    this._createItemAsync = async function (reqUrl, newItem)
    {
      let data = await this._myFetch(reqUrl, 'POST', newItem);
      return data;
    }
    //#endregion

    this.readInfoAsync = async function readInfoAsync() 
    {
      return await this._myFetch(`${this.url}/Guest/Info`);
    }

    //#region CRUD Friend
    this.readFriendsAsync = async (pageNr, flat=false, filter=null, pageSize=10) => this._readItemsAsync(`${this.url}/Friends/Read`, pageNr, flat, filter, pageSize);
    
    this.readFriendAsync = async (id, flat=true) => this._readItemAsync(`${this.url}/Friends/ReadItem`, id, flat);
    
    this.readFriendDtoAsync = async (id) => this._readItemDtoAsync(`${this.url}/Friends/ReadItemDto`, id);
   
    this.updateFriendAsync = async (id, newItem) => this._updateItemAsync(`${this.url}/Friends/UpdateItem`, id, newItem);
  
    this.createFriendAsync = async (newItem) => this._createItemAsync(`${this.url}/Friends/CreateItem`, newItem);
 
    this.deleteFriendAsync = async (id) => this._deleteItemAsync(`${this.url}/Friends/DeleteItem`, id);
    //#endregion

    //#region CRUD Pet
    this.readPetsAsync = async (pageNr, flat=false, filter=null, pageSize=10) => this._readItemsAsync(`${this.url}/Pets/Read`, pageNr, flat, filter, pageSize);
    
    this.readPetAsync  = async (id, flat=true) => this._readItemAsync(`${this.url}/Pets/ReadItem`, id, flat);

    this.readPetDtoAsync = async (id) => this._readItemDtoAsync(`${this.url}/Pets/ReadItemDto`, id);

    this.updatePetAsync = async (id, newItem) => this._updateItemAsync(`${this.url}/Pets/UpdateItem`, id, newItem);

    this.createPetAsync = async (newItem) => this._createItemAsync(`${this.url}/Pets/CreateItem`, newItem);

    this.deletePetAsync = async (id) => this._deleteItemAsync(`${this.url}/Pets/DeleteItem`, id);
    //#endregion
    
    //#region CRUD Quote
    this.readQuotesAsync = async (pageNr, flat=false, filter=null, pageSize=10) => this._readItemsAsync(`${this.url}/Quotes/Read`, pageNr, flat, filter, pageSize);
    
    this.readQuoteAsync = async (id, flat=true) => this._readItemAsync(`${this.url}/Quotes/ReadItem`, id, flat);

    this.readQuoteDtoAsync = async (id, flat=true) => this._readItemDtoAsync(`${this.url}/Quotes/ReadItemDto`, id);
    
    this.updateQuoteAsync = async (id, newItem) => this._updateItemAsync(`${this.url}/Quotes/UpdateItem`, id, newItem);

    this.createQuoteAsync = async (newItem) => this._createItemAsync(`${this.url}/Quotes/CreateItem`, newItem);

    this.deleteQuoteAsync = async (id) => this._deleteItemAsync(`${this.url}/Quotes/DeleteItem`, id);
    //#endregion
}

export default friendService;
