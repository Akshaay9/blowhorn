import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navleft">
        <h4>nullBrains.</h4>
      </div>
      <div className={`navcenter transbar ${modalOpen ? "open" : ""} `}>
        <p>Home</p>
        <p>Feature</p>
        <p>Blog</p>
        <p>Contact</p>

        <p>
          {" "}
          <i class="fas fa-search"></i>
        </p>
      </div>
      <div className="nav-mobile ">
        <div className="ham" onClick={() => setModalOpen((e) => !e)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>nullBrains.</h4>
      </div>
      <div className="navright">
        <p>sign-in</p>
        <p>sign-up</p>
      </div>
    </div>
  );
}

export default Nav;
