import React from "react";
import aboutImg from "../../../assets/images/about.png";

function AboutHero() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left side */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl lg:text-5xl leading-tight">
              Helping Students <br />
              <span className="text-blue-600">Find Opportunities,</span>
              <br />
              Achieve Dreams.
            </h1>

            <p className="mt-4 text-sm text-gray-600 md:text-base leading-relaxed max-w-xl">
              Scholarship Miner is a dedicated platform that connects students with verified
               scholarship opportunities from trusted sources around the world.
            </p>
          </div>

          {/* Right side */}
          <div className="flex justify-center">
            <img className="w-full max-w-lg h-auto object-contain"
              src={aboutImg}
              alt="About Scholarship Miner"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
