import React from "react";
import './style.css';

// dumb components you always start by typing function
// instead of dumb it is also called function component
function Nav() {
  return (
    <div className="nav-bar">
     
      <div className="nav-topic">Topic</div>
      <div className="nav-status">Status</div>
      <div className="nav-score">Score</div>
    </div>
  )
}

export default Nav;