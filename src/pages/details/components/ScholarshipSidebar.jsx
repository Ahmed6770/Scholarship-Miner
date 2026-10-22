import React from "react";
import { Building2, Globe, GraduationCap, BookOpen, Wallet, Calendar, Clock, Users, ExternalLink, Bell, Bookmark,} from "lucide-react";

function ScholarshipSidebar({ scholarship, isSaved, onSave }) {
  const quickInfo = [
    {
      icon: <Building2 size={16} />,
      label: "University",
      value: scholarship.university,
    },
    { icon: <Globe size={16} />, label: "Country", value: scholarship.country },
    {
      icon: <GraduationCap size={16} />,
      label: "Degree Level",
      value: scholarship.degree,
    },
    {
      icon: <BookOpen size={16} />,
      label: "Field of Study",
      value: scholarship.field,
    },
    {
      icon: <Wallet size={16} />,
      label: "Funding Type",
      value: scholarship.funding,
    },
    {
      icon: <Calendar size={16} />,
      label: "Deadline",
      value: scholarship.deadline,
      isDeadline: true,
    },
    {
      icon: <Clock size={16} />,
      label: "Duration",
      value: scholarship.duration,
    },
    { icon: <Users size={16} />, label: "Applicants", value: "International" },
  ]

  return (
    <aside className="space-y-6">
      <section className="rounded-3xl bg-white p-6 border border-gray-100 shadow-2xs">
        <h3 className="text-base font-bold text-gray-900 md:text-lg mb-4">
          Quick Information
        </h3>
        {/* information */}
        <div className="space-y-3.5 text-xs md:text-sm">
          {quickInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5 text-gray-500">
                <span className="text-gray-400">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span
                className={`font-semibold text-right ${
                  item.isDeadline ? "text-red-600 font-bold" : "text-gray-900"
                }`}
              >
                {item.value}
              </span>
            </div>
          ))}

          {/* Official website */}
          <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2.5 text-gray-500">
              <Globe size={16} className="text-gray-400" />
              <span>Official Website</span>
            </div>
            <a
              className="flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              href={scholarship.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Link
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-3xl bg-blue-50/60 p-6 border border-blue-100 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-3">
          <Bell size={22} />
        </div>

        <h4 className="text-sm font-bold text-gray-900 md:text-base">
          Don't Miss the Deadline
        </h4>
        <p className="mt-1 text-xs text-gray-600 leading-relaxed">
          Save this scholarship and we'll remind you before the deadline.
        </p>

        <button className={`mt-4 inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-2.5
             text-xs font-semibold shadow-2xs transition-colors cursor-pointer w-full ${
            isSaved ? "border-blue-600 bg-blue-600 text-white"
              : "border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
          }`}
          type="button"
          onClick={onSave}
        >
          <Bookmark
            size={15}
            className={isSaved ? "fill-white text-white" : ""}
          />
          {isSaved ? "Saved" : "Save Scholarship"}
        </button>
      </section>
    </aside>
  );
}

export default ScholarshipSidebar;
