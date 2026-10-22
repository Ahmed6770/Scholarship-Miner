import React from "react";
import { X, Check, ArrowRight, ArrowDown } from "lucide-react";
import withoutImg from "../../../assets/images/howItWorks/howItWorks-without.webp";
import withImg from "../../../assets/images/howItWorks/howItWorks-with.webp";

const withoutPoints = [
  "Endless searches with scattered results",
  "Unclear or missing information",
  "Hard to find reliable sources",
  "Missed deadlines and lost opportunities",
];

const withPoints = [
  "Search thousands of opportunities in one place",
  "Clear and detailed scholarship information",
  "Trusted sources you can rely on",
  "Never miss a deadline again",
];

function SmarterWay() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            The Smarter Way to Find Scholarships
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            From overwhelming to effortless.
          </p>
        </div>
        {/* The arrow */}
        <div className="relative rounded-3xl border border-gray-200 bg-slate-50 p-4 sm:p-6 md:p-8">
          <div
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10
           items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-slate-50"
          >
            <ArrowRight className="hidden md:block h-5 w-5" />
            <ArrowDown className="block md:hidden h-4 w-4" />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-white p-6 border border-gray-100">
              <img
                className="w-44 md:w-56 h-auto object-contain shrink-0"
                src={withoutImg}
                alt="Without Scholarship Miner"
                loading="lazy"
              />
              <div>
                <div className="mb-4 flex items-center gap-2 text-rose-600">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <X className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <h3 className="text-sm font-bold md:text-base">
                    Without Scholarship Miner
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {withoutPoints.map((text, index) => (
                    <li
                      className="flex items-start gap-2 text-xs text-gray-600 md:text-sm"
                      key={index}
                    >
                      <X className="mt-0.5 h-3.5 w-3.5 text-rose-500 shrink-0 stroke-[2.5]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl bg-white p-6 border border-gray-100">
              <div className="order-2 sm:order-1">
                <div className="mb-4 flex items-center gap-2 text-emerald-600">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <h3 className="text-sm font-bold md:text-base">
                    With Scholarship Miner
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {withPoints.map((text, idx) => (
                    <li
                      className="flex items-start gap-2 text-xs font-medium text-gray-700 md:text-sm"
                      key={idx}
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600 shrink-0 stroke-[3]" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                className="w-44 md:w-56 h-auto object-contain shrink-0 order-1 sm:order-2"
                src={withImg}
                alt="With Scholarship Miner"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SmarterWay;