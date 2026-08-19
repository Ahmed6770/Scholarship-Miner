import React from "react";
import heroImg from "../../../assets/images/howItWorks/howItWorks-hero.png";

function HowItWorksHero() {
  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left side */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl md:leading-tight">
              How Scholarship Miner<br/>
              <span className="text-blue-600">
                Works for You
              </span>
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
              We make scholarship discovery simple, organized, and
              stress-free so you can focus on your future.
            </p>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <img className="w-full max-w-xl h-auto object-contain"
              src={heroImg}
              alt="How Scholarship Miner Works for You"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksHero;
