import React from "react";

// Local CSS
import "./style.css"

function Card(props) {

  return (
    <div className="card">
      <img className="card-img" {...props} src={props.card.img}></img>
    </div>
  )
}

export default Card; 