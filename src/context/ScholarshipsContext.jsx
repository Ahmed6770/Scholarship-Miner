import { createContext, useState, useEffect } from "react";
import {getScholarships} from "../services/getScholarships.js"

export const ScholarshipsContext = createContext();

function ScholarshipsProvider({ children }) {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Load schloarships
  useEffect(() => {
    async function loadScholarships() {
      try {
          const data = await getScholarships();
          setScholarships(data)
      } catch (err) {
        console.log(err);
        setError(err.message);
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
