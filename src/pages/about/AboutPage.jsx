import React from "react";
import AboutHero from "./components/AboutHero";
import AboutMission from "./components/WhyWeBuilt";
import AboutDifferent from "./components/AboutDifferent";
import OurCommitment from "./components/OurCommitment";

function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutMission />
      <AboutDifferent />
      <OurCommitment />
    </main>
  );
}

export default AboutPage;
