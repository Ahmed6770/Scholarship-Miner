import { useParams } from "react-router-dom";
import ScholarshipHero from "./components/ScholarshipHero";
import QuickStatsBar from "./components/QuickStatsBar";
import ScholarshipMainInfo from "./components/ScholarshipMainInfo";
import ScholarshipSidebar from "./components/ScholarshipSidebar";
import scholarships from "../../data/scholarships.json";
import { useContext } from "react";
import { SavedContext } from "../../context/SavedContext";

function Details() {
  const { id } = useParams();
  const scholarship = scholarships.find((item) => item.id == id);
  const { savedScholarships, saveScholarship } = useContext(SavedContext);
  const isSaved = (savedScholarships || []).includes(scholarship?.id);

  return (
    <div className="min-h-screen bg-slate-50/50 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScholarshipHero
          scholarship={scholarship}
          isSaved={isSaved}
          onSave={() => saveScholarship(scholarship.id)}
        />
        <QuickStatsBar scholarship={scholarship} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <ScholarshipMainInfo scholarship={scholarship} />
          </div>
          <div className="md:col-span-1">
            <ScholarshipSidebar
              scholarship={scholarship}
              isSaved={isSaved}
              onSave={() => saveScholarship(scholarship.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
