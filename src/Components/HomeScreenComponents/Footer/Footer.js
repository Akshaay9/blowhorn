import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer1">
          <p>About</p>
          <p>Blog</p>
          <p>Team</p>
          <p>Pricing</p>
          <p>Contact</p>
          <p>Terms</p>
        </div>
        <div className="footer2">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        <div className="footer3">
          <p>@a 2021 akshayTech, inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
