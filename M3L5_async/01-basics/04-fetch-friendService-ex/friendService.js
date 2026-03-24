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

    this.readInfoAsync = async () => await this._myFetch(`${this.url}/Guest/Info`);

    //#region CRUD Friend
    //this.readFriendsAsync = 
    
    //this.readFriendAsync = 
    
    //this.readFriendDtoAsync = 
   
    //this.updateFriendAsync = 
  
    //this.createFriendAsync = 
 
    //this.deleteFriendAsync = 
    //#endregion
}

export default friendService;
