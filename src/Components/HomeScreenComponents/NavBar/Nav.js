import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="navleft">
        <h4>nullBrains.</h4>
      </div>
      <div className="navcenter">
        <p>Home</p>
        <p>Feature</p>
        <p>Blog</p>
        <p>Contact</p>

        <p>
          {" "}
          <i class="fas fa-search"></i>
        </p>
      </div>
      <div className="navright">
        <p>sign-in</p>
        <p>sign-up</p>
      </div>
    </div>
  );
}

export default Nav;
