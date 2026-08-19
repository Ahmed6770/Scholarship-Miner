import { Calendar, Wallet, GraduationCap, Languages, Globe } from "lucide-react";

function QuickStatsBar({ scholarship }) {
  const stats = [
    {
      icon: <Calendar size={20} className="text-blue-600" />,
      label: "Deadline",
      value: scholarship.deadline,
    },
    {
      icon: <Wallet size={20} className="text-blue-600" />,
      label: "Funding Type",
      value: scholarship.funding,
    },
    {
      icon: <GraduationCap size={20} className="text-blue-600" />,
      label: "Degree Level",
      value: scholarship.degree,
    },
    {
      icon: <Languages size={20} className="text-blue-600" />,
      label: "Language",
      value: scholarship.language,
    },
    {
      icon: <Globe size={20} className="text-blue-600" />,
      label: "Study in",
      value: scholarship.country,
    },
  ]
  return (
    <section className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-5">
      {stats.map((stat, idx) => (
        <div
          className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xs"
          key={idx}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            {stat.icon}
          </div>
          <div>
            <span className="block text-[11px] font-medium text-gray-500">
              {stat.label}
            </span>
            <span className="block text-xs font-bold text-gray-900 md:text-sm">
              {stat.value}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default QuickStatsBar;
