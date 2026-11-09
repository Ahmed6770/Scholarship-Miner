import { useState, useContext, useMemo, useEffect } from "react";
import { ScholarshipsContext } from "../context/ScholarshipsContext";

const initialFilters = {
  country: "",
  degree: "",
  field: "",
  funding: "",
  language: "",
  deadline: "",
};

function useScholarshipSearch() {
  const { scholarships = [] } = useContext(ScholarshipsContext);

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [filters, setFilters] = useState(initialFilters);

  const search = searchText.toLowerCase().trim();

  // Debounce 
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(()=> {
    const timer = setTimeout(()=>{
      setDebouncedSearch(search);
    }, 300 )
    return () => clearTimeout(timer);
  },[search])

  // useMemo
  const sortedResults = useMemo(() => {
    // Filter scholarships
    const filteredResults = scholarships.filter((item) => {
      // Checks the search keyword
      const matchesSearch =
        debouncedSearch === "" ||
        item.title.toLowerCase().includes(debouncedSearch) ||
        item.country.toLowerCase().includes(debouncedSearch) ||
        item.field.toLowerCase().includes(debouncedSearch);

      // Checks the filters
      const matchesFilters = Object.entries(filters).every(([key, value]) => {
        return value === "" || item[key] === value;
      });
      return matchesSearch && matchesFilters;
    });

    // Sort results
    const sortedResults = [...filteredResults];

    if (selectedSort === "Deadline (Soonest)") {
      sortedResults.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (selectedSort === "Newest") {
      sortedResults.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    return sortedResults;
  }, [scholarships, debouncedSearch, selectedSort, filters]);
// End of useMemodebouncedSearch

  // Filter handler
  const handleFilter = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setCurrentPage(1);
  };

  // Search input handler
  const handleText = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  // Reset search
  const handleReset = () => {
    setSearchText("");
    setFilters(initialFilters);
    setSelectedSort("Newest");
    setCurrentPage(1);
  };

  // Pagination
  const cardsPerPage = 6;
  const totalPages = Math.ceil(sortedResults.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentResults = sortedResults.slice(
    startIndex,
    startIndex + cardsPerPage,
  );

  return {
    results: sortedResults,
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
  };
}

export default useScholarshipSearch;
