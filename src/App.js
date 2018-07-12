import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js';

function generateDeck() {
  // return an array of card objects, where each card has 'symbol' and 'isFlipped'
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i=0; i<16; i++) {
    let card = {
      isFlipped: false, 
      symbol: symbols[i%8],
    }
    deck.push(card);
    // deck.push({
    //   symbol: symbols[i%8],
    //   isFlipped: false
    // })
  }
  shuffle(deck);
  // console.log(deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

// function unflipCards(card1Index, card2Index) {
//   let card1 = {...this.state.deck[card1Index]};
//   let card2 = {...this.state.deck[card2Index]};
//   card1.isFlipped = false;
//   card2.isFlipped = false;
// }

class App extends Component {
  constructor(){
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards:[]
    }
    // console.log(this.state)
  }

  pickCard(cardIndex) {
    // let cardToFlip = {...this.state.deck[cardIndex]}
    // if (cardToFlip.isFlipped) {
    //   return;
    // } else {
    //   cardToFlip.isFlipped = true;
    // }

    // let newDeck = this.state.deck.map((card, index) => {
    //   if (cardIndex == index) {
    //     return cardToFlip;
    //   } 
    //   return card;
    // });

    // in different way
    let newDeck = this.state.deck.map(card => {
      return {...card}
    });

    newDeck[cardIndex].isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    // if they've just selecte their second card, compare the two
    // if they're not the same symbol, flip them back over

    console.log(newPickedCards);
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      // console.log(card1Index);
      // console.log(card2Index);
      // console.log(newDeck);
      console.log(newPickedCards);
      // console.log(newDeck[card1Index].symbol);
      // console.log(newDeck[card2Index].symbol);
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        // console.log('not match');
        // newDeck[card1Index].isFlipped = false;
        // newDeck[card2Index].isFlipped = false;
        // setTimeout(this.unflipCards.bind(this, card1Index, card2Index), 1000);
        setTimeout(()=>{
          this.unflipCards(card1Index, card2Index);
        }, 1000 );
        // console.log(newPickedCards)
      }
      newPickedCards =[];
    } 

    this.setState({
      deck: newDeck, 
      pickedCards: newPickedCards
    });
  };

  unflipCards(card1Index, card2Index) {
    let newDeck = this.state.deck.map(card => {
      return {...card}
    });

    newDeck[card1Index].isFlipped = false;
    newDeck[card2Index].isFlipped = false;

    this.setState({
      deck: newDeck
    })
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => { 
      return <MemoryCard symbol={card.symbol} 
                         isFlipped={card.isFlipped} 
                         key={index} 
                         pickCard={this.pickCard.bind(this, index)} />
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h2 className="App-subtitle">Match Cards To Win</h2>
        </header>
        <div>
          {cardsJSX.slice(0,4)} 
        </div>
        <div>
         {cardsJSX.slice(4,8)}
        </div>
        <div>
          {cardsJSX.slice(8,12)}
        </div>
        <div>
          {cardsJSX.slice(12,16)}
        </div>
      </div>
    );
  }
}

export default App;
