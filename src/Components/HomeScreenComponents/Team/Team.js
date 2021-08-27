import React from "react";
import "./Team.css";
import person1 from "../../../Assets/UserProfile/person1.jpg"
import person2 from "../../../Assets/UserProfile/person2.jpg"
import person3 from "../../../Assets/UserProfile/person3.jpg"
import person4 from "../../../Assets/UserProfile/person4.jpg"
import person5 from "../../../Assets/UserProfile/person5.jpg"


function Team() {
  return (
    <>
      <div className="team">
        <p>Our team</p>
        <div className="tea">
          <h1>An incredible team of amazing individuals</h1>
          <div className="t"></div>
        </div>
        <div className="poeples">
            {/* people */}
          <div className="person">
            <div className="person-top l">
                <img src={person1} alt="" />
            </div>
            <div className="person-bottom">
              <p>Freddy smith</p>
              <p>CEO and Founder</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top p">
                <img src={person2} alt="" />
            </div>
            <div className="person-bottom">
              <p>Carl jones</p>
              <p>CTO and Founder</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top bl">
                <img src={person3} alt="" />
            </div>
            <div className="person-bottom">
              <p>Susan pete</p>
              <p>Marketing head</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top l">
                <img src={person4} alt="" />
            </div>
            <div className="person-bottom">
              <p>Tommy barnes</p>
              <p>Designer</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top p">
                <img src={person5} alt="" />
            </div>
            <div className="person-bottom">
              <p>Ron jenson</p>
              <p>Seniour dev</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top bl">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjB3b21lbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
            </div>
            <div className="person-bottom">
              <p>Pete sneeky</p>
              <p>Web dev</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top p">
                <img src="https://st2.depositphotos.com/3143277/8644/i/600/depositphotos_86446164-stock-photo-business-man-in-office.jpg" alt="" />
            </div>
            <div className="person-bottom">
              <p>Kelly ivanka</p>
              <p>Sales</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/*  */}
          <div className="person">
            <div className="person-top l">
                <img src="https://cdn.pixabay.com/photo/2019/05/24/10/59/business-man-4226005_1280.jpg" alt="" />
            </div>
            <div className="person-bottom ">
              <p>Richie adam</p>
              <p>Affiliate</p>
              <p>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-github"></i>
              </p>
            </div>
          </div>
          {/* people */}
        </div>
      </div>
    </>
  );
}

export default Team;
