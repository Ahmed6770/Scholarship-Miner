import { useContext } from "react";
import { Link } from "react-router-dom";
import { Bookmark, Calendar, Globe, GraduationCap } from "lucide-react";
import { SavedContext } from "../../../context/SavedContext";

function SavedScholarshipCard({ scholarship }) {
  const { saveScholarship } = useContext(SavedContext);

  return (
    <article className="rounded-2xl border border-gray-200/80 bg-white p-4 md:p-6 shadow-2xs transition-shadow duration-200 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-2 md:h-22 md:w-22">
            {(scholarship.logo || scholarship.image) ? (
              <img className="h-full w-full object-contain"
                src={scholarship.logo || scholarship.image}
                alt={scholarship.university}
              />
            ) : (
              <GraduationCap className="h-9 w-9 text-blue-600" />
            )}
          </div>

          {/* Details */}
          <div>
            <h2 className="text-base font-bold text-gray-900 md:text-lg">
              {scholarship.title}
            </h2>
            <p className="mt-0.5 text-xs text-gray-500 md:text-sm">
              {scholarship.university}
            </p>

            <div className="mt-2.5 flex flex-wrap items-center gap-2.5 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Globe size={13} className="text-gray-400" />
                {scholarship.country}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <GraduationCap size={13} className="text-gray-400" />
                {scholarship.degree}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 sm:pt-0 border-t border-gray-100 sm:border-0 sm:justify-end">
          {/* Funding badge */}
          <div className="flex flex-col items-start sm:items-end gap-1.5">
            <span className={`rounded-lg px-2.5 py-1 text-xs font-semibold border ${
                scholarship.funding === "Fully Funded"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-blue-50 text-blue-700 border-blue-100"
              }`}
            >
              {scholarship.funding}
            </span>

            {/* Deadline */}
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Calendar size={13} className="text-gray-400" />
              <span>{scholarship.deadline}</span>
            </div>
          </div>

          <div className="flex items-center sm:flex-col gap-2 shrink-0">
            <button className="flex h-9 w-9 sm:w-28 cursor-pointer items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-700"
              type="button"
              onClick={() => saveScholarship(scholarship.id)}
            >
              <Bookmark size={17} className="fill-white text-white" />
            </button>

            <Link className="rounded-xl border border-blue-600 px-3.5 py-1.5 text-xs font-semibold text-blue-600 cursor-pointer transition-colors hover:bg-blue-50 text-center"
              to={`/scholarships/${scholarship.id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default SavedScholarshipCard;
