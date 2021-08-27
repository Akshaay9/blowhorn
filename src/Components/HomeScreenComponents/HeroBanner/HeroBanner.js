import React from "react";
import "./HeroBanner.css";
import dp from "../../../Assets/Brands/dp.jpg";
import ggl from "../../../Assets/Brands/ggl.jpg";
import hbspt from "../../../Assets/Brands/hbspt.jpg";
import shopify from "../../../Assets/Brands/shopify.jpg";
import slk from "../../../Assets/Brands/slk.jpg";
import yt from "../../../Assets/Brands/yt.jpg";

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
      <div className="companies">
        <h5>Trusted by top leading companies</h5>
        <div className="companies-images">
          <img src={dp} alt="" />
          <img src={ggl} alt="" />
          <img src={hbspt} alt="" />
          <img src={shopify} alt="" />
          <img src={slk} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
