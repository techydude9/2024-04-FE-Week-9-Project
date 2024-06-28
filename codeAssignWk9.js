/* Week 9
    javaScript file
    Author: Bob Ruzga
    Date: June 27, 2024
*/

/* Week 9 Coding Step Requirements:
Coding Steps:
    - For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
        -  You do not need to do anything special when there is a tie in a round.
    - Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
            You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser's console.

The completed project should, when executed, do the following:
    - Deal 26 Cards to each Player from a Deck of 52 cards.
    - Iterate through the turns where each Player plays a Card.
    - The Player who played the higher card is awarded a point.
    - Ties result in zero points for both Players.
    - After all cards have been played, display the score and declare the winner.

The following is extra credit (10pts)
Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

// Class for Player
    class onePlayer {
        constructor (name) {
            this.name = name;
        }
    }

// Class for Players
    class Players {
        constructor () {
            this.players = [];
        }
  
    // Method to add Player to game
    newPlayer(name) {
        let p = new onePlayer(name);
        this.players.push(p);
        return p;
    }
}

// Class for Cards
    class Acard {
        constructor(Suite, cardValue) {
            this.Suite = Suite;
            this.cardValue = cardValue;
        }
    }

// Class for Deck
    class Deck {
        constructor() {
            this.deck = [];
        }

    //Method to create the Deck
    createDeck(suit, value) {
        let d = new Acard(suit, value);
        this.deck.push(d);
        return d
        }

    shuffleDeck() {
    // Shuffle the deck using the Fisher-Yates algorithm
    //    console.log(this.deck);

        for (let i = this.deck.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];    
            }   
        return this.deck;
        }  
    }
   

// --------------   BEGIN THE GAME of WAR!  --------
// ---- Setup section

// Setup the Players for the Game
    let game = new Players();
    game.newPlayer("Bob");
    game.newPlayer("Deb");
    console.log (game);

// Create the Deck
    let newDeck = new Deck();
    let deckSuite = "";

    for (let s = 0; s < 4; s++) {
        for (let v = 1; v < 14; v++) {
            switch (s) {
              case 0:
               deckSuite = 'Hearts'
               break;
              case 1:
               deckSuite = 'Clubs'
               break;
              case 2:
               deckSuite = 'Diamonds'
               break;
              case 3:
               deckSuite = 'Spades'
               break;
              default:
                console.log('Err. Something went wrong.')
              }

            newDeck.createDeck(deckSuite, v);
            }
    }
 //   console.log(newDeck); For testing 

 // Shuffle Deck
    newDeck.shuffleDeck();
    
    console.log(newDeck);  //For Testing

 // Let's Deal the cards to the players
    let player1Hand = new Deck();
    let player2Hand = new Deck();

    let p1 = 0;
    let p2 = 0;

 //   console.log(newDeck.length);

    for (let i = 0; i < newDeck.length; i++) {     
        if (i % 2 == 0) {
            player1Hand[p1] = newDeck[i];
            p1 += 1;
         } else {
            player2Hand[p2] = newDeck[i];
            p2 += 1;
         }
    }

    console.log(player1Hand);
    console.log(player2Hand);
