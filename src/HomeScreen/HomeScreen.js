import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";

import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
    </div>
  );
}

export default HomeScreen;
