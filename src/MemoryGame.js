import React, { Component } from 'react';
import './MemoryGame.css';
import MemoryCard from './MemoryCard.js';

function generateDeck() {
  let symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i=0; i<16; i++) {
    let card = {
      isFlipped: false, 
      symbol: symbols[i%8],
    }
    deck.push(card);
  }
  shuffle(deck);
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

class MemoryGame extends Component {
  constructor(){
    super();
    this.state = {
      deck: generateDeck(),
      pickedCards:[]
    }
  }

  pickCard(cardIndex) {
    let newDeck = this.state.deck.map(card => {
      return {...card}
    });

    newDeck[cardIndex].isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      let card1 = newDeck[card1Index];
      let card2 = newDeck[card2Index];
      if (card1.symbol !== card2.symbol) {
        setTimeout(()=>{
          this.unflipCards(card1Index, card2Index);
        }, 1000 );
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

export default MemoryGame;
