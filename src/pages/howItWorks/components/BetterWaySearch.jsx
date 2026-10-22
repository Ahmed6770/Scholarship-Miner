import React from "react";
import { Search, Check } from "lucide-react";
import logo from "../../../assets/images/logo.webp";

const traditionalPoints = [
  "Multiple websites",
  "Irrelevant results",
  "Outdated information",
  "Time-consuming",
];

const minerPoints = [
  "One platform, thousands of opportunities",
  "Relevant and up-to-date results",
  "Verified sources",
  "Save time and find more",
];
function BetterWaySearch() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            A Better Way to Search
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Built for students. Designed for results.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white">
          <div
            className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2
           flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white ring-4 ring-white"
          >
            VS
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0
           md:divide-x divide-gray-200 rounded-3xl overflow-hidden"
          >
            <div className="bg-slate-50/70 p-6 md:p-8 flex items-start gap-4">
              <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl bg-gray-200/70 text-gray-600">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 md:text-lg">
                  Normal Search
                </h3>
                <ul className="mt-3 space-y-2">
                  {traditionalPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs text-gray-600 md:text-sm"
                    >
                      <Check className="h-4 w-4 text-gray-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50/40 p-6 md:p-8 flex items-start gap-4">
              <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-2xl  border border-blue-100">
                <img
                  src={logo}
                  alt="Scholarship Miner logo"
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-blue-600 md:text-lg">
                  Scholarship Miner
                </h3>
                <ul className="mt-3 space-y-2">
                  {minerPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-xs font-medium text-blue-900 md:text-sm"
                    >
                      <Check className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BetterWaySearch;