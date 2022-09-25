import React from "react";
import "./Landing.css";
//import imagelogo from "../../asset/img/undraw_savings_re_eq4w.svg";

const Landing = () => {
  return (
    <div>
      <div className="landingContainer">
        <div className="landingInfo">
          <h1>
            A NEW WAY TO LEARN <br />
            🍁 FINANCE
          </h1>
          <p>
            As a Canadian newcomer, it can be difficult to understand the great
            Canadian financial system. We're here to help you navigate through
            the maze and achieve financial independence and secure your new
            future!
          </p>
          <a href="/">
            <button>Get Started</button>
          </a>
        </div>

        <div className="landingImg">
          <img src="" alt="LandingImage" />
        </div>
      </div>
    </div>
  );
};

export default Landing;