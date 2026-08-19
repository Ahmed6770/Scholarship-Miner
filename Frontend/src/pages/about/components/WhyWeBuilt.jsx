import React from "react";
import { Search, ClipboardList, Lightbulb, Target } from "lucide-react";

function WhyWeBuilt() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Why We Built Scholarship Miner
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base leading-relaxed">
            We know that finding the right scholarship can be time-consuming and overwhelming.
             That's why we built Scholarship Miner—to make the process simple, reliable, and
              accessible for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div className="flex flex-col items-center text-center rounded-2xl bg-white p-6 border border-gray-100 shadow-xs"
                key={index}>
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border ${step.iconBg}`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyWeBuilt;

  const steps = [
    {
      icon: Search,
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      title: "We Search",
      text: "We collect opportunities from trusted sources so you don't have to.",
    },
    {
      icon: ClipboardList,
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      title: "We Verify",
      text: "We review and organize information to ensure accuracy and clarity.",
    },
    {
      icon: Lightbulb,
      iconBg: "bg-amber-50 text-amber-600 border-amber-100",
      title: "We Simplify",
      text: "We present everything in one place—easy to search, filter, and explore.",
    },
    {
      icon: Target,
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      title: "You Achieve",
      text: "You save time, find the right opportunities, and focus on what really matters.",
    },
  ];