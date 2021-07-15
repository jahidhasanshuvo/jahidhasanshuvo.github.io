import React from "react";
import HeroSection from "components/molecules/hero-section";
import BlackHeroSection from "components/molecules/black-hero-section";

const Home = () => {
  return (
    <div className="p-home">
      {/* <HeroSection></HeroSection> */}
      <BlackHeroSection />
    </div>
  );
};

export default Home;
