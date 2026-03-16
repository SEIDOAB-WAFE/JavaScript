'use strict';

let zip = document.querySelector("#zip");
let btn = document.querySelector(".formContainer button");

btn.addEventListener("click", () => {
  
  const zipok = /\d{3} \d{2}/.test(zip.value);
  
  alert(`ZipCode: ${zip.value}, ZipOK: ${zipok}`);
})