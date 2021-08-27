import React from "react";
import "./Blogs.css";
import orange from "../../../Assets/Blogs/orange.jpg";
import cup2 from "../../../Assets/Blogs/cup2.jpg";

function Blogs() {
  return (
    <>
      <div className="blog">
        <h1>The Project blog</h1>
        <h4>Design and layout to help you with your app</h4>
        <div className="blogs1">
          <div className="blogs lightb">
            <div className="blogtop">
              <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" alt="" />
            </div>
            <div className="blogbtm ">
              <h2>Refreshing Designs</h2>
              <p>
                Quench satisfying design to help you stir up emotion and tell a
                story
              </p>
            </div>
          </div>
          <div className="blogs ltbr">
            <div className="blogtop">
              <img src={cup2} alt="" />
            </div>
            <div className="blogbtm ">
              <h2>Refreshing Designs</h2>
              <p>
                Quench satisfying design to help you stir up emotion and tell a
                story
              </p>
            </div>
          </div>
          <div className="blogs orng">
            <div className="blogtop">
              <img
                src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                alt=""
              />
            </div>
            <div className="blogbtm ">
              <h2>Refreshing Designs</h2>
              <p>
                Quench satisfying design to help you stir up emotion and tell a
                story
              </p>
            </div>
          </div>
        </div>
        <div className="blogs2"></div>
      </div>
    </>
  );
}

export default Blogs;
