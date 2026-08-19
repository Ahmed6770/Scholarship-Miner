import React from "react";
import { Check } from "lucide-react";
import heroImg from "../../../assets/images/howItWorks/howItWorks-hero.png";

function AboutDifferent() {

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-3xl bg-blue-50/40 border border-blue-100 p-6 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Left side */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-sm md:max-w-md h-auto object-contain mix-blend-multiply"
                src={heroImg}
                alt="What Makes Us Different"
              />
            </div>

            {/* Right side */}
            <div className="space-y-5">
              {points.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full 
                  bg-blue-600 text-white mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-gray-600 md:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDifferent;

  const points = [
    {
      title: "Curated Opportunities",
      text: "Handpicked scholarships that are relevant and valuable.",
    },
    {
      title: "Clear & Detailed Information",
      text: "We provide all the important details you need in one place.",
    },
    {
      title: "Trusted Sources",
      text: "We partner with official websites and organizations.",
    },
    {
      title: "No Cost, Always",
      text: "Scholarship Miner is completely free for every student.",
    },
  ];
