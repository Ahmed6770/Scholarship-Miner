import { useParams } from "react-router-dom";
import ScholarshipHero from "./components/ScholarshipHero";
import QuickStatsBar from "./components/QuickStatsBar";
import ScholarshipMainInfo from "./components/ScholarshipMainInfo";
import ScholarshipSidebar from "./components/ScholarshipSidebar";
import { useContext } from "react";
import { SavedContext } from "../../context/SavedContext";
import { ScholarshipsContext } from "../../context/ScholarshipsContext";
import Reveal from "../../components/shared/Reveal";

function Details() {
  const { id } = useParams();
  const { scholarships = [], loading } = useContext(ScholarshipsContext);
  const { savedScholarships, saveScholarship } = useContext(SavedContext);
  
  if (loading) {
    return (
      <div className="flex h-64 flex-col items-center justify-center text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-3 border-blue-600 border-t-transparent" />
        <p className="mt-3 text-sm text-gray-500">Loading scholarship...</p>
      </div>
    );
  }
  
  const scholarship = scholarships.find((item) => item.id == id);
  const isSaved = savedScholarships.includes(scholarship?.id);
  
  return (
    <main className="min-h-screen bg-slate-50/50 py-6 md:py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <ScholarshipHero
            scholarship={scholarship}
            isSaved={isSaved}
            onSave={() => saveScholarship(scholarship.id)}
          />
        </Reveal>

        <Reveal>
          <QuickStatsBar scholarship={scholarship} />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Reveal>
              <ScholarshipMainInfo scholarship={scholarship} />
            </Reveal>
          </div>
          <div className="md:col-span-1">
            <Reveal>
              <ScholarshipSidebar
                scholarship={scholarship}
                isSaved={isSaved}
                onSave={() => saveScholarship(scholarship.id)}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
