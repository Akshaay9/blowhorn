import React from "react";
import "./Intro.css";
import bot from "../../../Assets/HeroSVG/bot.svg";
import space from "../../../Assets/HeroSVG/space.svg";

function Intro() {
  return (
    <div>
      <div className="intro">
        <div className="introcard-1">
          <div className="intro-card-svg">
            <img src={space} alt="" />
          </div>
          <div className="introcard">
            <h2>Boost Productivity</h2>
            <p>
              Build an atmosphere that created productivity in your organisation
              and your company culture
            </p>
            <ul>
              <li>
                <i class="far fa-square"> </i> Maximixe your productivity and
                growth{" "}
              </li>
              <li>
                <i class="far fa-square"> </i>Speed past your competition
              </li>
              <li>
                <i class="far fa-square"></i>Learn top techniques{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="introcard-2">
        <div className="intro-card-svg">
            <img src={bot} alt="" />
          </div>
          <div className="introcard">
            <h2>Automated Task</h2>
            <p>
              Save time and money with our revolutionary services. We are the
              leader of the industry
            </p>
            <ul>
              <li>
                <i class="far fa-square"></i> Automate task management workflow
              </li>
              <li>
                <i class="far fa-square"></i>Detailed analitics for your data
              </li>
              <li>
                <i class="far fa-square"></i>Some awesome integration
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Intro;
