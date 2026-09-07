import React from "react";
import { Bookmark } from "lucide-react";

function SavedHero({ savedScholarships = [] }) {
  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-2xl font-extrabold text-gray-900 md:text-3xl">
              Saved Scholarships
            </h1>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">
              Review the opportunities you want to keep track of.
            </p>

            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              <Bookmark size={13} className="fill-blue-600 text-blue-600" />
              {savedScholarships.length} Saved Scholarships
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SavedHero;
