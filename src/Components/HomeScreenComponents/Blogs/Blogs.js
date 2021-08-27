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
              <img
                src="https://images.unsplash.com/photo-1557800636-894a64c1696f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
                alt=""
              />
            </div>
            <div className="blogbtm blogbtm1 ">
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
            <div className="blogbtm blogbtm2">
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
            <div className="blogbtm blogbtm3">
              <h2>Refreshing Designs</h2>
              <p>
                Quench satisfying design to help you stir up emotion and tell a
                story
              </p>
            </div>
          </div>
        </div>
        <div className="blogs2">
          <div className="blog2">
            <div className="blog2top">
              <img
                src="https://images.unsplash.com/photo-1522684894605-cdcdf44be259?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29yayUyMHN0YXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="blog2btm blog2btm1">
              <h4>Best workstation of the year</h4>
<p>Checkout the inspiring workstations to get idea for your next work setup</p>
            </div>
          </div>

          <div className="blog2">
            <div className="blog2top">
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmUlMjBzaG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="blog2btm blog2btm">
            <h4>Eating for produtivity</h4>
            <p>Learn how to be more disciplined in your diet to meet the consistency </p>
            </div>
          </div>

          <div className="blog2">
            <div className="blog2top">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="blog2btm blog2btm3">
            <h4>A design mind-set</h4>
            <p>What does it mean to have a great design mindset? explore in this article</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
