import React, { Component } from "react";

// Local CSS
import "./style.css"

class Card extends Component{
  state = {
    clicked: false
  }

  componentDidMount(){
    console.log(this.props.card)
  }

  handleClick = () => {
    if(this.state.clicked === false){
      this.setState({
        clicked: true
      })
    }
  }

  render(){
    return (
      <div className="card">
        <img className="card-img" {...this.props} src={this.props.card.img} onClick={this.handleClick}></img>
      </div>
    )
  }
}

export default Card; 