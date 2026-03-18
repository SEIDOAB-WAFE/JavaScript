'use strict';
import { deckOfCards } from './deck-of-cards.js';

const deck = new deckOfCards();
console.log(deck.count());


const [cardRow, cardCol, cardTopOffset] = [7,6, -200];
const spriteTop =  cardTopOffset - cardRow*110 - cardRow*228;
const spriteLeft = -165 - cardCol*110 - cardCol*162;

const joker = {cardRow: 7, cardCol: 6, cardTopOffset: -200};

const card = document.querySelectorAll(".PlayingCard");
card[0].setAttribute(
    'style', `background-position: top ${joker.cardTopOffset - joker.cardRow*110 - joker.cardRow*228}px left ${-165 - joker.cardCol*110 - joker.cardCol*162}px;`
)
card[1].setAttribute(
    'style', `background-position: top ${joker.cardTopOffset - joker.cardRow*110 - joker.cardRow*228}px left ${-165 - joker.cardCol*110 - joker.cardCol*162}px;`
)