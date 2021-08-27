import React from "react";
import "./Feature.css";

function Feature() {
  return (
    <>
      <div className="features">
        <h2>our Features</h2>
        <p>Check out our list of awesome features</p>
        <div className="feature-grid">
          <div className="feature">
            <div className="logo">
              <i class="fas fa-book"></i>
            </div>
            <h4>Certifications</h4>
            <p>Each of our plan will provide your and your team certificates</p>
          </div>
          <div className="feature">
            
            <div className="logo">
              <i class="far fa-bell"></i>
            </div>
            <h4>Notifications</h4>
            <p>
              Sent out notificatiob to all our customer to keep them engaged
            </p>
          </div>
          <div className="feature">
            <div className="logo">
              <i class="fas fa-archive"></i>
            </div>
            <h4>Bundles</h4>
            <p>High quality bundels of awesome tools to help your team out</p>
          </div>

          <div className="feature">
            <div className="logo">
              <i class="fas fa-code"></i>
            </div>
            <h4>Developer tools</h4>
            <p>Dev tools to grow your application and keep it upto date</p>
          </div>
          <div className="feature">
            <div className="logo">
              <i class="fas fa-square"></i>
            </div>
            <h4>Building Blocks</h4>
            <p>
              The right kind of building blocks to take your company next level
            </p>
          </div>
          <div className="feature">
            <div className="logo">
              <i class="fab fa-cc-amazon-pay"></i>
            </div>
            <h4>Coupons</h4>
            <p>Dev tools to grow your application and keep it upto date</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature;
