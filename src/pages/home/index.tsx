import React from "react";
import HeroSection from "components/organisms/hero-section";
import BlackHeroSection from "components/molecules/black-hero-section";
import About from "components/organisms/about";

const Home = () => {
  return (
    <div className="p-home">
      <HeroSection />
      <About />
      {/* <BlackHeroSection /> */}
    </div>
  );
};

export default Home;
