import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    console.log("route is", route);
    if (route === "/about") {
      return <AboutPage />;
    }
    if (route === "/courses") {
      return <CoursesPage />;
    }
    return <HomePage />;
  }
  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
