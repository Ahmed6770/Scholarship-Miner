import React from "react";
import { Search as SearchIcon } from "lucide-react";

function HeroSearch({ handleText, searchText }) {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-4 md:py-7">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
            Find Your Perfect Scholarship
          </h1>
          <p className="mt-1 text-xs text-gray-500 md:text-sm">
            Search by keyword, degree, field, or university
          </p>
        </div>

        {/* Search bar */}
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-2 shadow-xs md:mt-5 md:rounded-2xl">
          <div className="relative flex items-center">
            <input
              className="w-full rounded-lg border-0 py-2 pl-3 pr-10 text-xs text-gray-800 outline-none placeholder:text-gray-400 focus:ring-0 md:py-2.5 md:pl-4 md:text-sm"
              type="text"
              value={searchText}
              onChange={handleText}
              placeholder="Search scholarships (e.g. Computer Science, Germany, Master's)..."
            />
            <div className="absolute right-3 flex items-center text-gray-400 pointer-events-none">
              <SearchIcon size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSearch;
