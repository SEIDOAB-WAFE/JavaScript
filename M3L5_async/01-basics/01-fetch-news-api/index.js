//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://newsapi.org/docs/endpoints/top-headlines
//Example where News do not allow cors on developer license
const _apiKey = "7a31b34188d8496faa260f42d1938be4";
//Use your own API key, you can get it for free on newsapi.org, 


async function myFetch(url) {
  try {

    
    let res = await fetch(url, {
      headers: {'x-api-key': _apiKey}
    });
    
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
  const newsList = document.getElementById('results');
  const newsCategories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  for (const category of newsCategories) {

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}`;
    const news = await myFetch(url);

    console.log(news);

    //Create a header of the news category
    const newsCat = document.createElement('h2');
    newsCat.innerHTML = category;
    newsList.appendChild(newsCat);

    //create a categoryList
    const categoryList = document.createElement('ul');
    news.articles.forEach(article => {
      const listItem = document.createElement('li');
      listItem.innerText = article.title;
      categoryList.appendChild(listItem);
    });
    newsList.appendChild(categoryList);
  }
})();


//Exercise: 
// 1. 
// Create a simple hmtl page and javascript file that reads the weather forecast 
// for the next 5 days for a city of your choice using the OpenWeatherMap API (https://openweathermap.org/api). 
// Display the forecast including the date, temperature, and weather conditions.

// Hint: you did this in the C# advanced course in project A and well as Project B (Maui)
// Hint:
//  const _apiKey = "eee86395bdce14b3d962d5956193d800";
//  const city = "Stockholm";
//  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=en&appid=${_apiKey}`;

// 2. Explore free APIs on the internet and create a simple web page that fetches and displays data from one of those APIs.
// Hint: you can find free APIs on websites like https://publicapis.io