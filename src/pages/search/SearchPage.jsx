import React, { useEffect } from "react";
import HeroSearch from "./components/HeroSearch";
import Sidebar from "./components/Sidebar";
import SearchResults from "./components/SearchResults";
import Pagination from "./components/Pagination";
import useScholarshipSearch from "../../hooks/useScholarshipSearch";

function Search() {
  const {
    results,
    currentResults,
    searchText,
    currentPage,
    setCurrentPage,
    totalPages,
    selectedSort,
    setSelectedSort,
    filters,
    handleFilter,
    handleText,
    handleReset,
  } = useScholarshipSearch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <main>
      <HeroSearch handleText={handleText} searchText={searchText} />

      <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-6 px-4 md:mt-8 md:flex-row md:px-6">
        <Sidebar
          handleFilter={handleFilter}
          filters={filters}
          handleReset={handleReset}
        />

        <div className="flex-1">
          <SearchResults
            results={currentResults}
            totalResults={results.length}
            selectedSort={selectedSort}
            setSelectedSort={setSelectedSort}
          />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </main>
  );
}

export default Search;
