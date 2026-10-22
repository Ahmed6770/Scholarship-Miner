import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Bookmark, CalendarDays, GraduationCap, Globe, ArrowRight } from "lucide-react";
import { SavedContext } from "../../../context/SavedContext";

function ScholarshipCard({ scholarship }) {
  const { saveScholarship, savedScholarships } = useContext(SavedContext);
  const isSaved = (savedScholarships || []).includes(scholarship.id);

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:border-blue-200 hover:shadow-md md:rounded-3xl">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-40 w-full shrink-0 overflow-hidden bg-slate-100 md:h-auto md:w-44 lg:w-48">
          {scholarship.image ? (
            <img className="h-full w-full object-cover"
              src={scholarship.image}
              alt={scholarship.university}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full min-h-[140px] items-center justify-center bg-blue-50">
              <GraduationCap className="h-10 w-10 text-blue-600" />
            </div>
          )}

          {scholarship.featured && (
            <span className="absolute top-2.5 left-2.5 rounded-full bg-blue-600 px-2.5 py-0.5 text-[11px] font-semibold text-white shadow-xs">
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-4 md:p-5">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-gray-900 md:text-lg">
                  {scholarship.title}
                </h2>
                <p className="mt-0.5 text-xs text-gray-600 md:text-sm">
                  {scholarship.university}
                </p>
              </div>

              {/* Save Button */}
              <button
                aria-label ={isSaved ? "Remove from saved" : "Save scholarship"}
                type="button"
                onClick={() => saveScholarship(scholarship.id)}
                className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border transition-colors ${
                  isSaved
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-gray-200 text-gray-500 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Bookmark
                  className={isSaved ? "fill-white text-white" : ""}
                  size={17}
                />
              </button>
            </div>

            {/* Badges */}
            <div className="mt-2.5 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-700">
                <Globe size={13} />
                {scholarship.country}
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs text-gray-700">
                <GraduationCap size={13} />
                {scholarship.degree}
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                {scholarship.funding}
              </div>
            </div>

            {/* Description */}
            <p className="mt-2.5 text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
              {scholarship.description.slice(0, 130)}...
            </p>

            {/* Deadline */}
            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-red-600">
              <CalendarDays size={13} />
              <span>Deadline: {scholarship.deadline}</span>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-gray-100">
            <div className="flex flex-wrap gap-1.5">
              {scholarship.tags.map((tag) => (
                <span
                  className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link className="group flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 md:text-sm"
              to={`/scholarships/${scholarship.id}`}
            >
              View Details
              <ArrowRight
                className="transition-transform duration-200 group-hover:translate-x-1"
                size={15}
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ScholarshipCard;
