import React from "react";
import {
  Search,
  CheckCircle2,
  Bookmark,
  Calendar,
  BookmarkCheck,
  Globe,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Advanced Search",
    description:
      "Filter scholarships easily by degree level, country, field of study, and funding type.",
    icon: Search,
  },
  {
    id: 2,
    title: "Verified Opportunities",
    description:
      "Find genuine, up-to-date scholarship details from accredited universities worldwide.",
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: "Save Favorites",
    description:
      "Bookmark your preferred scholarships with one click to review them later.",
    icon: Bookmark,
  },
  {
    id: 4,
    title: "Deadline Tracking",
    description:
      "Check application deadlines clearly so you never miss an opportunity.",
    icon: Calendar,
  },
  {
    id: 5,
    title: "Saved List Manager",
    description:
      "Easily access and organize all your saved scholarships in a dedicated page.",
    icon: BookmarkCheck,
  },
  {
    id: 6,
    title: "Global Reach",
    description:
      "Explore international study opportunities across top global destinations.",
    icon: Globe,
  },
];
function KeyFeatures() {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6 text-center md:mb-12">
          <h2 className="text-[22px] font-bold text-gray-900 md:text-3xl">
            Why Choose Scholarship Miner?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-gray-600 md:text-base md:leading-7">
            Powerful tools to simplify your scholarship search journey.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {features.map((feature) => (
            <div
              className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-xs md:rounded-3xl md:p-6"
              key={feature.id}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 md:mb-5 md:h-16 md:w-16 md:rounded-2xl">
                <feature.icon className="h-5.5 w-5.5 md:h-7 md:w-7" />
              </div>
              <h3 className="mb-1.5 text-base font-semibold text-gray-900 md:text-xl">
                {feature.title}
              </h3>
              <p className="text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;