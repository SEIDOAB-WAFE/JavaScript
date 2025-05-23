
//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

//https://developer.mozilla.org/en-US/docs/Web/API/FormData

const myForm = document.getElementById('my-form');

//Start the server by opening a terminal in /03-case-study-server and type node 04-formData-post-server.js
const url = 'http://localhost:3000/api/upload';


myForm.addEventListener('submit', async event => {
  event.preventDefault();

  //Create the key/value pairs used in the form
  const formData = new FormData(myForm);

  //show that you can append any field. For example a API key
  formData.append('user', true);
  console.log(formData.get("email"));

  for (const p of formData){
    console.log(p);
  }

  try {
    //send the data using post and await the reply
    const response = await fetch(url, {
      method: 'post',
      body: formData
    });
    const result = await response.json();

    if (response.ok) {
      alert("Thank you for submitting the information. It has been recieved");
    }
    else {
      alert("Transmission error");
    }
    console.log(result);
  }
  catch {
    alert("Transmission error");
  }
});
