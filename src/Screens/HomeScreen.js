import React from "react";
import Nav from "../Components/HomeScreenComponents/NavBar/Nav";
import HeroBanner from "../Components/HomeScreenComponents/HeroBanner/HeroBanner";
import Intro from "../Components/HomeScreenComponents/Intro/Intro";
import Feature from "../Components/HomeScreenComponents/Features/Feature";
import Team from "../Components/HomeScreenComponents/Team/Team";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <Intro />
      <Feature />
      <Team />
    </div>
  );
}

export default HomeScreen;
