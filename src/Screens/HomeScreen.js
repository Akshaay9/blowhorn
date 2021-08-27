import React from "react";
import Nav from "../Components/HomeScreenComponents/NavBar/Nav";
import HeroBanner from "../Components/HomeScreenComponents/HeroBanner/HeroBanner";
import Intro from "../Components/HomeScreenComponents/Intro/Intro";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <Intro />
    </div>
  );
}

export default HomeScreen;
