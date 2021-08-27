import React from "react";
import Nav from "../Components/HomeScreenComponents/NavBar/Nav";
import HeroBanner from "../Components/HomeScreenComponents/HeroBanner/HeroBanner";
import Intro from "../Components/HomeScreenComponents/Intro/Intro";
import Feature from "../Components/HomeScreenComponents/Features/Feature";
import Team from "../Components/HomeScreenComponents/Team/Team";
import Blogs from "../Components/HomeScreenComponents/Blogs/Blogs";

function HomeScreen() {
  return (
    <div>
      <Nav />
      <HeroBanner />
      <Intro />
      <Feature />
      <Team />
      <Blogs />
    </div>
  );
}

export default HomeScreen;
