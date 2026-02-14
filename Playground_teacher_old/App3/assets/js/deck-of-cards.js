//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// To use ES6 modules, export and import, you need to create a package.json and set the type ot module.
// - open a terminal in your script directory and type: npm init -y
// - open the package file and add the line at the top: "type":"module", 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import { prototypeCard } from './playing-card.js';

export function deckOfCards () {

    const top_offset = ["-135px", "-150px", "-170px", "-200px"];

    const suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
    const numeral = ["Two", "Three", "Four", "Five", "Six", 
                     "Seven", "Eight", "Nine", "Ten",
                     "Knight", "Queen", "King", "Ace"];

    this.cards = []; 

    //this is only to map it to the sprite image
    function sprite (suitOrder, numeralOrder) 
    {
        const spritePos = {col: (numeralOrder-2) % 7, row: suitOrder * 2, topOffset: top_offset[suitOrder]};
        if (numeralOrder > 8)
            spritePos.row++;

        return spritePos;
    }


    this.freshDeck = function() {

        this.cards = []; 
        let suitOrder = 0;
        for (const s of suits) {

            let numeralOrder = 2;
            for (const n of numeral) {

                let cardimage = sprite(suitOrder,numeralOrder);

                let card = Object.create(prototypeCard,
                    {
                        suit: { value: s }, numeral: { value: n }, value: { value: numeralOrder },
                        suitOrder: { value: suitOrder }, numeralOrder: { value: numeralOrder }, value: { value: numeralOrder },
                        spriteRow: { value: cardimage.row }, spriteCol: { value: cardimage.col },
                        spriteTopOffset: { value: cardimage.topOffset }
                    });

                this.cards.push(card);
                numeralOrder++;
            }
            suitOrder++;
        }
    }

    this.count = function() { return this.cards.length }

    this.dealOne = function() {

        if (this.cards.length <= 0)
            throw new TypeError('Deck is empty');

        return this.cards.pop();
    }

    this.shuffle = function() {

        //Shuffle between 100 and 1000 times
        let nrShuffles = rnd(100, 999 + 1);
        for (let i = 0; i < nrShuffles; i++) {

            let loCard = rnd(0, this.cards.length);
            let hiCard = rnd(0, this.cards.length);

            //swap the cards
            [this.cards[loCard], this.cards[hiCard]] = [this.cards[hiCard], this.cards[loCard]];
        }

        //randomNumber = Math.floor(Math.random() * (max - min) ) + min;
        //non inclusive max, but inclusive min
        function rnd(min, max) { return Math.floor(Math.random() * (max - min)) + min; }
    }

    this.sort = function() {
        return this.cards.sort((card1, card2) => {
            if (card1.suitOrder !== card2.suitOrder)
                return card1.suitOrder - card2.suitOrder;

            return card1.numeralOrder - card2.numeralOrder;
        })
    }

    this.freshDeck();

}

//Test Code
const deck = new deckOfCards();
deck.freshDeck();




/* Exercises
1. Continue the test code above to printout the deck to the console
1. Continue the test code above to shuffle and printout the deck to the console
2. Continue the test code above to sort and printout the deck to the console
3. Continue the test code above with a while loop that deals one card and print it out, as long as there are cards in the deck.

4. in cards.html play with 
   const [cardRow, cardCol, cardTopOffset] = [0,0, -140];
   to make sure you can print out each card.

5. In cards.html use deck-of-cards to printout a full deck of cards in html
6. Add buttons to shuffle and sort, and then printout the decks
*/


