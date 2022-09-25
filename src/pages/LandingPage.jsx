import React from "react";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";

import "./LandingPage.css";

function LandingPage() {
  const description =
    "This platform empowers students by enabling them to improve their reading skills without having to accrue expensive tutor bills";
  return (
    <div className="LandingPage">
      <div className="LandingPage__title">Learn.It</div>
      <div className="LandingPage__description">{description}</div>

      <div className="LandingPage__button">
        <Link to="/home">
          <AwesomeButton type="secondary" color="black">
            Start Today
          </AwesomeButton>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
