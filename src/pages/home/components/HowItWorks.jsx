import React from "react";
import { Search, ListFilter, ExternalLink } from "lucide-react";

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 text-center md:mb-12">
          <h2 className="text-[22px] font-bold text-gray-900 md:text-3xl">
            How It Works
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-600 md:text-base md:leading-7">
            Finding your ideal scholarship is simple with our three-step process
          </p>
        </div>

        <div className="relative mt-6 md:mt-14">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-5 left-[10.6%] right-[10.6%] h-1 rounded-full bg-blue-100"></div>

          {/* Steps */}
          <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-0">
            {howItWorks.map((item) => (
              <div
                className="flex w-full max-w-xs flex-col items-center text-center md:w-72"
                key={item.id}
              >
                {/* Number */}
                <div className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white md:h-10 md:w-10 md:text-base">
                  {item.id}
                </div>
                {/* Vertical Line */}
                <div className="h-6 w-1 bg-blue-100 md:h-10"></div>
                {/* Icon */}
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-xs md:mb-6 md:h-20 md:w-20 md:rounded-3xl">
                  <item.icon className="h-6 w-6 md:h-9 md:w-9" />
                </div>
                {/* Title */}
                <h3 className="mb-1.5 text-base font-semibold text-gray-900 md:text-xl">
                  {item.title}
                </h3>
                {/* Description */}
                <p className="text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

const howItWorks = [
  {
    id: 1,
    title: "Search & Filter",
    description:
      "Explore thousands of scholarships filtered by country, degree level, and study field.",
    icon: Search,
  },
  {
    id: 2,
    title: "Bookmark & Organize",
    description:
      "Save your top choices to your favorites list to compare and track application deadlines.",
    icon: ListFilter,
  },
  {
    id: 3,
    title: "Review & Apply",
    description:
      "Access verified requirements and apply directly on official university and organization portals.",
    icon: ExternalLink,
  },
];