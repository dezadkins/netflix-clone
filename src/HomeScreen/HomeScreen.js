import React from "react";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import requests from "../Requests";

import "./HomeScreen.css";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  );
}

export default HomeScreen;
