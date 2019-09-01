import React from "react";
import { Link } from "react-router-dom";

//fun start from Capital letter, lower is assumed as html component.
//by default everything in each file is private so we need to export.

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsite Administration</h1>
      <p>Ultra responsive web app.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
