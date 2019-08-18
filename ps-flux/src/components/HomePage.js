import React from "react";

//fun start from Capital letter, lower is assumed as html component.
//by default everything in each file is private so we need to export.

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsite Administration</h1>
      <p>Ultra responsive web app.</p>
    </div>
  );
}

export default HomePage;
