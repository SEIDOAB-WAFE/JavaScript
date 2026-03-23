//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://newsapi.org/docs/endpoints/top-headlines
//Example where News do not allow cors on developer license
const _apiKey = "eee86395bdce14b3d962d5956193d800";
//Use your own API key, you can get it for free on newsapi.org, 


async function myFetch(url) {
  try {

    
    let res = await fetch(url);
    
    if (res.ok) {

      console.log("Request successful");

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

//Lets use myFetch. As it is an async method and I cannot have await at top level, I need to make trick.
//See analogy on making in C# main async
//I make main as an asych arrow function with immediate execution of syntax, (async() => {})();

(async () => {

  //Here I write all the code to be executed at script top level, c# main level
  const results = document.getElementById('results');

  const city = "Stockholm";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${_apiKey}`;
  const forecast = await myFetch(url);

  for (const item of forecast.list) {

    const forecastList = document.createElement('ul');
    forecast.list.forEach(item => {
      const listItem = document.createElement('li');
      listItem.innerText = `${item.dt_txt}: ${item.main.temp}°C, ${item.weather[0].description}`;
      forecastList.appendChild(listItem);
    });
    results.appendChild(forecastList);
  }
})();


//Exercise: 
// Create a simple hmtl page and javascript file that reads the weather forecast 
// for the next 5 days for a city of your choice using the OpenWeatherMap API (https://openweathermap.org/api). 
// Display the forecast including the date, temperature, and weather conditions.

// Hint: you did this in the C# advanced course in project A and well as Project B (Maui)
// Hint:
//  const _apiKey = "eee86395bdce14b3d962d5956193d800";
//  const city = "Stockholm";
//  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${_apiKey}`;
