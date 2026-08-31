import React from "react";
import AboutHero from "./components/AboutHero";
import AboutMission from "./components/WhyWeBuilt";
import AboutDifferent from "./components/AboutDifferent";
import OurCommitment from "./components/OurCommitment";
import Reveal from "../../components/shared/Reveal";

function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Reveal>
        <AboutHero />
      </Reveal>
      <Reveal>
        <AboutMission />
      </Reveal>
      <Reveal>
        <AboutDifferent />
      </Reveal>
      <Reveal>
        <OurCommitment />
      </Reveal>
    </main>
  );
}

export default AboutPage;
