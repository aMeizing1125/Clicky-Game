import React, { Component } from "react";
import Card from "../../smart/Card";
import Nav from "../../dumb/Nav";
import allCards from "./data/AllCards";

// import Banner from "../../dumb/Banner" // not sure if I need to do this here just brainstorming

// Local CSS
import "./style.css"

class GamePage extends Component {
  state = {
    allCards: [],
    score: 0,
    topScore: 0,
    gameOver: false
  }

  componentDidMount(){
    console.log(allCards);
    console.log("Component did mount");
    this.setState({
      allCards: allCards
    })
  }

  render() {
    return (
    <div className="game-page">
      <Nav />
      <div className="content">
        <div className="game-area">
          {this.state.allCards.map(thisCard => (
            <Card 
              card={thisCard} 
              key={thisCard.id} 
              alt={thisCard.name}
            />
          ))}
        </div>
      </div>
    </div>
    )}
}

export default GamePage;