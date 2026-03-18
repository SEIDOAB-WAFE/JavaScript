//Just to ensure we force js into strict mode in HTML scrips - we don't want any sloppy code
'use strict';  // Try without strict mode

// To enable ES6 Modules, export and import you need to have a package.json in your js applications root directory
// Open terminal in your applications root directory and type: npm init -y
// Then add the line at the top   "type": "module",    

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

const prototypeCard = {
    cardColor: function () {
        switch (this.suit) {
            case 'Heart':
            case 'Diamond': return 'red';
        }
        return 'black';
    },
    cardFaceOrNumeral: function () {   
//    get cardFaceOrNumeral () {    //note, I can now change it to a getter
            switch (this.numeral) {
            case 'Knight':
            case 'Queen':
            case 'King': return 'face';
        }
        return 'numeral';
    },
    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral()} card` }

    //if I use a getter
//    toString: function () { return `${this.suit} of ${this.numeral} is a ${this.cardColor()} ${this.cardFaceOrNumeral} card` }
}

let card1 = { suit: "Heart", numeral: "King", spriteRow: 2, spriteCol: 2 }; //sprite... is position in the cards.jpg
let card2 = { suit: "Heart", numeral: "Ace", spriteRow: 0, spriteCol: 0 };
let card3 = { suit: "Heart", numeral: "Five", spriteRow: 0, spriteCol: 4 };

//now we can assign the prototype to the created objects
Object.setPrototypeOf(card1, prototypeCard);
Object.setPrototypeOf(card2, prototypeCard);
Object.setPrototypeOf(card3, prototypeCard);

console.log('' + card1);
console.log('' + card2);
console.log('' + card1);

export {prototypeCard}
