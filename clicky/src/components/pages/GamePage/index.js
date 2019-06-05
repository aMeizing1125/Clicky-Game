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

  handleClick = (id) => {
    console.log(`Card id: ${id}`);

    const updatedCards = this.state.allCards.map(item => {
      // If item in array's id is equal to the id of the card we clicked on
      if(item.id === id){
        // If item has not been clicked before
        if(item.clicked === false){
          item.clicked = true
        }
        // If item has been clicked before
        else{
          console.log("you lose");
          this.setState({
            gameOver: true
          })
        }
      }
      return item
    }) 

    // console.log(updatedCards);
    
    if(this.state.gameOver === false){
      this.setState({
        allCards: updatedCards
      });
    }
    else{
      this.setState({
        allCards: allCards,
        score: 0,
        gameOver: false
      })
    }
  }// end of handleClick =>

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
              onClick={() => {this.handleClick(thisCard.id)}}
            />
          ))}
        </div>
      </div>
    </div>
    )}
}

export default GamePage;