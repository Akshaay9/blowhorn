import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <>
      <div className="banner">
        <div className="banner-heading">
          <h1>Start Crafting Your</h1>
          <h1>Next Great Idea</h1>
        </div>
        <div className="banner-footnotes">
          <p>Simplifying the creation of landing pages, blog pages</p>
          <p>application pages and so much more!</p>
        </div>
        <div className="banner-cta">
          <p>Purchase now</p>
          <p>Learn more</p>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
