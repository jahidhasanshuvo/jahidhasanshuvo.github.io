import React from "react";
import HeroSection from "components/organisms/hero-section";
import BlackHeroSection from "components/molecules/black-hero-section";
import About from "components/organisms/about";
import Experience from "components/organisms/experience";

const Home = () => {
  return (
    <div className="p-home">
      {/* <BlackHeroSection /> */}
      <HeroSection />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
