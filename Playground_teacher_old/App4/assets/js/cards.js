'use strict';

import { deckOfCards } from './deck-of-cards.js';
import { prototypeCard } from './playing-card.js';

/* offsets
let top_offset = ["-135px", "-150px", "-170px", "-200px"];
let suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
let numeral = ["Two", "Three", "Four", "Five", 
               "Six", "Seven", "Eight", "Nine", "Ten",
               "Knight", "Queen", "King", "Ace"];

*/

const album = document.querySelector(".ImgAlbum");

//Create deck
const deck = new deckOfCards();
deck.freshDeck();

deck.shuffle();
while(deck.cards.length) {

  //pull a card
  const c1 = deck.dealOne();

  //create the cardFace
  drawCard(c1)
}


function drawCard(card) {

    const cardImage = document.createElement("div");
    cardImage.classList.add("ImgItem");

    let cardFace = document.createElement("div");
    cardFace.classList.add("PlayingCard");
    cardImage.appendChild(cardFace);


    //draw the card on the cardface
    const [cardRow, cardCol, cardTopOffset] = [card.spriteRow, card.spriteCol, card.spriteTopOffset];
    const spriteTop =  cardTopOffset - cardRow*110 - cardRow*228;
    const spriteLeft = -165 - cardCol*110 - cardCol*162;

    cardFace.setAttribute(
    'style',
    `background-position: top ${spriteTop}px left ${spriteLeft}px`
    );

    album.appendChild(cardImage);
}
