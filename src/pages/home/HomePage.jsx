import React from "react";
import HeroHome from "./components/HeroHome.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
import Faq from "./components/Faq.jsx";
import CTA from "./components/CTA.jsx";
import Reveal from "../../components/shared/Reveal.jsx";

function Home() {
  return (
    <section>
      <Reveal>
        <HeroHome />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <KeyFeatures />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <CTA />
      </Reveal>
    </section>
  );
}

export default Home;