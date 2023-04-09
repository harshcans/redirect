import React from "react";
import "./Navbar.css";

function Navbar() {
  return(
    <header id="header">
    <div className="logo">
      <img id="header-img" src="https://i.ibb.co/z5qKqpF/Capture.png" alt="odd jobs logo"/>

    </div>
    <nav id="nav-bar" className="nav-bar">
      <ul>
        <li><a className="nav-link" href="#Free_Quote">Free Quote</a>
        </li>
        <li><a className="nav-link" href="#Features">Features</a>
        </li>
        <li><a className="nav-link" href="#How_It_Works">How It Works</a>
        </li>
        <li><a className="nav-link" href="#Pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Navbar;
