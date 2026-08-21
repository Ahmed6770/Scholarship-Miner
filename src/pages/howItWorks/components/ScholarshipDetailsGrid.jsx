import React from "react";
import {
  Calendar,
  DollarSign,
  GraduationCap,
  Gift,
  FileText,
  ExternalLink,
} from "lucide-react";

function ScholarshipDetailsGrid() {
  const cards = [
    {
      icon: Calendar,
      iconBg: "bg-blue-50 text-blue-600",
      title: "Deadline",
      desc: "Know the exact application deadlines.",
    },
    {
      icon: DollarSign,
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Funding Type",
      desc: "See if it's fully funded, partially funded, or other.",
    },
    {
      icon: GraduationCap,
      iconBg: "bg-indigo-50 text-indigo-600",
      title: "Eligibility",
      desc: "Check who can apply with clear requirements.",
    },
    {
      icon: Gift,
      iconBg: "bg-amber-50 text-amber-600",
      title: "Benefits",
      desc: "Understand what the scholarship covers.",
    },
    {
      icon: FileText,
      iconBg: "bg-blue-50 text-blue-600",
      title: "Requirements",
      desc: "See all required documents.",
    },
    {
      icon: ExternalLink,
      iconBg: "bg-emerald-50 text-emerald-600",
      title: "Official Link",
      desc: "Apply directly on the official website.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
            What You Get on Every Scholarship
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            All the important details. In one place.
          </p>
        </div>

        {/* 6 Grid Cards - 2 per row on mobile */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center rounded-2xl bg-white p-5 sm:p-6 border border-gray-100 shadow-xs"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ScholarshipDetailsGrid;
