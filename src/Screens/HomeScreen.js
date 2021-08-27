import React from "react";
import Nav from "../Components/HomeScreenComponents/NavBar/Nav";
import HeroBanner from "../Components/HomeScreenComponents/HeroBanner/HeroBanner";
import Intro from "../Components/HomeScreenComponents/Intro/Intro";
import Feature from "../Components/HomeScreenComponents/Features/Feature";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <Intro />
      <Feature />
    </div>
  );
}

export default HomeScreen;
