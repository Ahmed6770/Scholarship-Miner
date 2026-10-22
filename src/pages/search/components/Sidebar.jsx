import React, { useState, useContext } from "react";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";
import { ScholarshipsContext } from "../../../context/ScholarshipsContext";

function Sidebar({ filters, handleFilter, handleReset }) {
  const { scholarships = [] } = useContext(ScholarshipsContext);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function getFilterOptions(key) {
    return [...new Set(scholarships.map((item) => item[key]).filter(Boolean))].sort();
  }

  const filterOptions = [
    {
      label: "Country",
      name: "country",
      defaultOption: "Any Country",
      options: getFilterOptions("country"),
    },
    {
      label: "Degree Level",
      name: "degree",
      defaultOption: "Any Degree",
      options: getFilterOptions("degree"),
    },
    {
      label: "Field of Study",
      name: "field",
      defaultOption: "Any Field",
      options: getFilterOptions("field"),
    },
    {
      label: "Funding Type",
      name: "funding",
      defaultOption: "Any Funding",
      options: getFilterOptions("funding"),
    },
    {
      label: "Language",
      name: "language",
      defaultOption: "Any Language",
      options: getFilterOptions("language"),
    },
    {
      label: "Deadline",
      name: "deadline",
      defaultOption: "Any Deadline",
      options: getFilterOptions("deadline"),
    },
  ];

  return (
    <section className="h-fit w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-xs md:rounded-3xl md:p-6 lg:w-80">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-blue-600 lg:hidden" />
          <h3 className="text-base font-bold text-gray-900 md:text-lg">
            Search Filters
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="cursor-pointer text-xs font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 md:text-sm"
            type="button"
            onClick={handleReset}
          >
            Reset All
          </button>

          <button
            className="flex cursor-pointer items-center justify-center rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 lg:hidden"
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle search filters"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div
        className={`mt-4 ${isMobileOpen ? "block" : "hidden"} md:mt-6 lg:block`}
      >
        {filterOptions.map((filter) => (
          <div className="mb-4 md:mb-5 last:mb-6 md:last:mb-8"
            key={filter.name}
          >
            <label className="mb-1.5 block text-xs font-semibold text-gray-700 md:text-sm"
            htmlFor={filter.name}
            >
              {filter.label}
            </label>

            <select className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs outline-none transition-colors focus:border-blue-600 md:px-4 md:py-2.5 md:text-sm"
              id={filter.name}
              value={filters[filter.name]}
              onChange={handleFilter}
              name={filter.name}
            >
              <option>{filter.defaultOption}</option>

              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sidebar;
