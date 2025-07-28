import React from "react";
import "./LandingPage.css";
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1 className="landing-title">Happy Birthday, Love</h1>
        <p className="landing-subtitle">A little scrapbook of memories and love</p>
        <Link to="/story" className="landing-button">
  Open Scrapbook
</Link>
      </div>
    </div>
  );
};

export default Landing;
