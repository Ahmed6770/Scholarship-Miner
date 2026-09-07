import { Link } from "react-router-dom";
import {
  ExternalLink,
  Bookmark,
  Building2,
  Globe,
  CalendarDays,
  ChevronLeft,
} from "lucide-react";

function ScholarshipHero({ scholarship, isSaved, onSave }) {
  return (
    <section className="mb-8 rounded-3xl bg-white p-6 md:p-8 shadow-xs border border-gray-100">
      <div className="mb-4">
        <Link className="inline-flex cursor-pointer items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700 md:text-sm"
          to="/scholarships"
        >
          <ChevronLeft size={18} />
          Back to results
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-black text-gray-900 md:text-3xl lg:text-4xl leading-tight">
            {scholarship.title}
          </h1>

          {/* Image mobile*/}
          <div className="mt-4 mb-1 overflow-hidden rounded-2xl border border-gray-100 shadow-sm h-64 w-full md:hidden">
            <img className="h-full w-full object-cover"
              src={scholarship.image}
              alt={scholarship.university}
            />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-gray-600 md:text-sm">
            <span className="flex items-center gap-1.5">
              <Building2 size={15} className="text-blue-600" />
              {scholarship.university}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Globe size={15} className="text-blue-600" />
              {scholarship.country}
            </span>
          </div>

          {/* Badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-xl bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 border border-purple-100">
              {scholarship.degree}
            </span>
            <span className="rounded-xl bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 border border-emerald-100">
              {scholarship.funding}
            </span>
            <span className="rounded-xl bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 border border-purple-100">
              {scholarship.field}
            </span>
          </div>

          {/* Description */}
          <p className="mt-4 text-xs leading-relaxed text-gray-600 md:text-sm">
            {scholarship.description}
          </p>

          {/* Deadline */}
          <div className="mt-5 flex items-center gap-2 text-xs font-bold text-red-600 md:text-sm">
            <CalendarDays size={16} />
            <span>Application Deadline: {scholarship.deadline}</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-700 md:text-sm cursor-pointer"
              href={scholarship.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
              <ExternalLink size={15} />
            </a>

            <button className={`flex items-center gap-2 rounded-xl border px-5 py-3 text-xs font-semibold transition-colors cursor-pointer md:text-sm ${
                isSaved ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
              type="button"
              onClick={onSave}
            >
              <Bookmark
                size={16}
                className={isSaved ? "fill-blue-600 text-blue-600" : ""}
              />
              {isSaved ? "Saved" : "Save Scholarship"}
            </button>
          </div>
        </div>

        {/* Image desktop  */}
        <div className="hidden md:block">
          <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm h-64 sm:h-72 lg:h-80 w-full">
            <img className="h-full w-full object-cover"
              src={scholarship.image}
              alt={scholarship.university}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipHero;
