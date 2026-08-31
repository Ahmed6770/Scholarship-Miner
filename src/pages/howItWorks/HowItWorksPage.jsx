import HowItWorksHero from "./components/HowItWorksHero";
import SmarterWay from "./components/SmarterWay";
import JourneyTimeline from "./components/JourneyTimeline";
import ScholarshipDetailsGrid from "./components/ScholarshipDetailsGrid";
import BetterWaySearch from "./components/BetterWaySearch";
import HowItWorksCTA from "./components/HowItWorksCTA";
import Reveal from "../../components/shared/Reveal";

function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Reveal>
        <HowItWorksHero />
      </Reveal>
      <Reveal>
        <SmarterWay />
      </Reveal>
      <Reveal>
        <JourneyTimeline />
      </Reveal>
      <Reveal>
        <ScholarshipDetailsGrid />
      </Reveal>
      <Reveal>
        <BetterWaySearch />
      </Reveal>
      <Reveal>
        <HowItWorksCTA />
      </Reveal>
    </main>
  );
}

export default HowItWorksPage;
