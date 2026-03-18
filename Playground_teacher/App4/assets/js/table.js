'use strict';
import {LibraryService, Book} from './services/library-service.js';

(function () {

    //using LibraryService
    const library = new LibraryService();
    let books = library.readBooks(0, 10);

    let table = document.querySelector(".TableContainer");

    for (const book of books.pageItems) {

        let div1 = document.createElement("div");
        div1.classList.add("TableItem");
        div1.innerText = book.title;
        table.appendChild(div1);

        let div2 = document.createElement("div");
        div2.classList.add("TableItem");
        div2.innerText = book.author;
        table.appendChild(div2);

        let div3 = document.createElement("div");
        div3.classList.add("TableItem");
        div3.innerText = book.genre;
        table.appendChild(div3);

        let div4 = document.createElement("div");
        div4.classList.add("TableItem");
        div4.innerText = book.publishedYear;
        table.appendChild(div4);
}})();
