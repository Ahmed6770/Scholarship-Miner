import HowItWorksHero from "./components/HowItWorksHero";
import SmarterWay from "./components/SmarterWay";
import JourneyTimeline from "./components/JourneyTimeline";
import ScholarshipDetailsGrid from "./components/ScholarshipDetailsGrid";
import BetterWaySearch from "./components/BetterWaySearch";
import HowItWorksCTA from "./components/HowItWorksCTA";

function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      <HowItWorksHero />
      <SmarterWay />
      <JourneyTimeline />
      <ScholarshipDetailsGrid />
      <BetterWaySearch />
      <HowItWorksCTA />
    </main>
  );
}

export default HowItWorksPage;
