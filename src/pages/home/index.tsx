import React from "react";
import HeroSection from "components/organisms/hero-section";
import BlackHeroSection from "components/molecules/black-hero-section";
import About from "components/organisms/about";
import Experience from "components/organisms/experience";
import Works from "components/organisms/works";

const Home = () => {
  return (
    <div className="p-home">
      {/* <BlackHeroSection /> */}
      <HeroSection />
      <About />
      <Experience />
      <Works />
    </div>
  );
};

export default Home;
