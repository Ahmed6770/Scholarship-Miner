import { useState, useContext } from "react";
import { ScholarshipsContext } from "../context/ScholarshipsContext";

const initialFilters = {
  country: "Any Country",
  degree: "Any Degree",
  field: "Any Field",
  funding: "Any Funding",
  language: "Any Language",
  deadline: "Any Deadline",
};

function useScholarshipSearch() {
  const { scholarships = [] } = useContext(ScholarshipsContext);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [filters, setFilters] = useState(initialFilters);
  const search = searchText.toLowerCase().trim();

  // Filter scholarships
  const filteredResults = scholarships.filter((item) => {
    const matchesSearch =
      search === "" ||
      item.title.toLowerCase().includes(search) ||
      item.country.toLowerCase().includes(search) ||
      item.field.toLowerCase().includes(search) 
    return (
      (filters.country === "Any Country" || item.country === filters.country) &&
      (filters.degree === "Any Degree" || item.degree === filters.degree) &&
      (filters.field === "Any Field" || item.field === filters.field) &&
      (filters.funding === "Any Funding" || item.funding === filters.funding) &&
      (filters.language === "Any Language" || item.language === filters.language) &&
      (filters.deadline === "Any Deadline" || item.deadline === filters.deadline)&&
      matchesSearch
    );
  });

  // Sort results
  const sortedResults = [...filteredResults];
  if (selectedSort === "Deadline (Soonest)") {
    sortedResults.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  } else if (selectedSort === "Newest") {
    sortedResults.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
  }

  // Pagination
  const cardsPerPage = 6;
  const totalPages = Math.ceil(sortedResults.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentResults = sortedResults.slice(
    startIndex,
    startIndex + cardsPerPage,
  );

  // Filter handler
  const handleFilter = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
