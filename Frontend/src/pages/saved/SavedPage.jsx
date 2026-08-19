import SavedHero from "./components/SavedHero";
import SavedContent from "./components/SavedContent";
import { useContext } from "react";
import { SavedContext } from "../../context/SavedContext";
import scholarships from "../../data/scholarships.json";

function Saved() {
  const { savedScholarships } = useContext(SavedContext)

  const savedData = scholarships.filter((scholarship) =>
    savedScholarships.includes(scholarship.id),
  );
  return (
    <div className="min-h-[70vh] bg-slate-50/50 pb-12">
      <SavedHero savedScholarships={savedScholarships} />
      <SavedContent savedData={savedData} />
    </div>
  )
}

export default Saved;
