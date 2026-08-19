import { createContext, useEffect, useState } from "react";

export const SavedContext = createContext();

function SavedProvidor({ children }) {
  const savedInStorage = localStorage.getItem("savedInStorage");
  const currentSaved = JSON.parse(savedInStorage);

  const [savedScholarships, setSavedScholarships] = useState(
    currentSaved === null ? [] : currentSaved,
  );

  useEffect(() => {
    localStorage.setItem("savedInStorage", JSON.stringify(savedScholarships));
  }, [savedScholarships]);

  function saveScholarship(id) {
    if (savedScholarships.includes(id)) {
      setSavedScholarships(savedScholarships.filter((item) => item !== id));
    } else {
      setSavedScholarships((prev) => [...prev, id]);
    }
  }

  return (
    <SavedContext.Provider value={{ savedScholarships, saveScholarship }}>
      {children}
    </SavedContext.Provider>
  );
}
export default SavedProvidor;
