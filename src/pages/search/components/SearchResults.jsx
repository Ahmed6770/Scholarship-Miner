import React from "react";
import ScholarshipCard from "./ScholarshipCard";

function SearchResults({ results, totalResults, selectedSort, setSelectedSort }) {
  return (
    <section className="flex-1">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between md:mb-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">Scholarships</h2>
          <p className="mt-0.5 text-xs text-gray-500 md:text-sm">
            {totalResults} scholarships found
          </p>
        </div>

        <select
          className="rounded-xl border border-gray-300 px-3 py-1.5 text-xs outline-none transition-colors duration-200 focus:border-blue-600 md:px-4 md:py-2 md:text-sm"
          onChange={(event) => setSelectedSort(event.target.value)}
          value={selectedSort}
        >
          <option>Newest</option>
          <option>Deadline (Soonest)</option>
        </select>
      </div>

      {/* Cards */}
      <div className="space-y-4 md:space-y-6">
        {results.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center text-center md:h-80">
            <span className="text-4xl md:text-6xl">🔍</span>
            <h3 className="mt-3 text-lg font-bold text-gray-900 md:text-2xl">
              No Scholarships Found
            </h3>
            <p className="mt-2 max-w-md text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
              Try changing your filters or search keywords.
            </p>
          </div>
        ) : (
          results.map((scholarship) => (
            <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
          ))
        )}
      </div>
    </section>
  );
}

export default SearchResults;
