import React from "react";
import { Search, Bookmark, FileText, Send, Trophy } from "lucide-react";

function JourneyTimeline() {
  return (
    <section className="py-12 md:py-16 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Your Scholarship Journey
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            From discovery to opportunity.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-[4.25rem] left-16 right-16 hidden h-0.5 bg-blue-300/70 lg:block z-0" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {step.num}
                  </div>
                  <div
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50
                   text-blue-600 border border-blue-200"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500 max-w-[180px]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;

const steps = [
  {
    num: "1",
    icon: Search,
    title: "Discover",
    desc: "Find opportunities that inspire you.",
  },
  {
    num: "2",
    icon: Bookmark,
    title: "Shortlist",
    text: "Save the best ones that fit your goals.",
  },
  {
    num: "3",
    icon: FileText,
    title: "Prepare",
    text: "Gather documents and meet requirements.",
  },
  {
    num: "4",
    icon: Send,
    title: "Apply",
    text: "Submit your application on the official site.",
  },
  {
    num: "5",
    icon: Trophy,
    title: "Achieve",
    text: "Take the next step toward your dreams.",
  },
];
