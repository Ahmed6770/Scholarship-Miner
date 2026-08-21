import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 md:mt-10">
      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition duration-200 hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 md:px-4 md:py-2.5 md:text-sm"
      >
        <ChevronLeft size={16} />
        Previous
      </button>

      {/* Page Indicator */}
      <span className="text-xs font-medium text-gray-600 md:text-sm">
        Page <span className="font-bold text-gray-900">{currentPage}</span> of{" "}
        <span className="font-bold text-gray-900">{totalPages}</span>
      </span>

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition duration-200 hover:border-blue-600 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 md:px-4 md:py-2.5 md:text-sm"
      >
        Next
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

export default Pagination;
