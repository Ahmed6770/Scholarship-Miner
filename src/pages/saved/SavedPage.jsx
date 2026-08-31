import SavedHero from "./components/SavedHero";
import SavedContent from "./components/SavedContent";
import { useContext } from "react";
import { SavedContext } from "../../context/SavedContext";
import scholarships from "../../data/scholarships.json";
import Reveal from "../../components/shared/Reveal";

function Saved() {
  const { savedScholarships } = useContext(SavedContext);

  const savedData = scholarships.filter((scholarship) =>
    savedScholarships.includes(scholarship.id),
  );
  return (
    <div className="min-h-[70vh] bg-slate-50/50 pb-12">
      <Reveal>
        <SavedHero savedScholarships={savedScholarships} />
      </Reveal>
      <Reveal>
        <SavedContent savedData={savedData} />
      </Reveal>
    </div>
  );
}

export default Saved;
