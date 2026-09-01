import { createContext, useState, useEffect } from "react";

export const ScholarshipsContext = createContext();

const API_URL = "https://api.npoint.io/021984025d6c4d3927f2";

function ScholarshipsProvider({ children }) {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadScholarships() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to load scholarships");
        }
        const data = await response.json();
        setScholarships(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadScholarships();
  }, []);

  return (
    <ScholarshipsContext.Provider value={{ scholarships, loading, error }}>
      {children}
    </ScholarshipsContext.Provider>
  );
}

export default ScholarshipsProvider;
