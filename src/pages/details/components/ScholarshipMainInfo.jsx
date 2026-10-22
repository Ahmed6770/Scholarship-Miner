import { Check, Info, Gift, FileText, ClipboardList } from "lucide-react";

function ScholarshipMainInfo({ scholarship }) {
  const documents = [
  "Academic transcripts",
  "CV / Resume",
  "Statement of Purpose",
  "Two reference letters",
  "English language proficiency proof",
]

  return (
    <section className="space-y-8 rounded-3xl bg-white p-6 md:p-8 border border-gray-100 shadow-2xs">
      {/* About */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 md:text-xl">
          About the Scholarship
        </h2>
        <p className="mt-3 text-xs leading-relaxed text-gray-600 md:text-sm md:leading-6">
          {scholarship.description}
        </p>
      </div>

      <hr className="border-gray-100" />

      {/* Benefits */}
      <div>
        <div className="flex items-center gap-2 text-emerald-600">
          <Gift size={20} />
          <h3 className="text-base font-bold text-gray-900 md:text-lg">
            Benefits
          </h3>
        </div>
        <ul className="mt-4 space-y-2.5">
          {scholarship.benefits.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-xs text-gray-700 md:text-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                <Check size={13} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-100" />

      {/* Requirements */}
      <div>
        <div className="flex items-center gap-2 text-blue-600">
          <ClipboardList size={20} />
          <h3 className="text-base font-bold text-gray-900 md:text-lg">
            Requirements
          </h3>
        </div>
        <ul className="mt-4 space-y-2.5">
          {scholarship.requirements.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 text-xs text-gray-700 md:text-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                <Check size={13} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-100" />

      {/* Required  */}
      <div>
        <div className="flex items-center gap-2 text-purple-600">
          <FileText size={20} />
          <h3 className="text-base font-bold text-gray-900 md:text-lg">
            Required Documents
          </h3>
        </div>
        <ul className="mt-4 space-y-2.5">
          {documents.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs text-gray-700 md:text-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100
               text-emerald-600 mt-0.5">
                <Check size={13} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tip */}
      <div className="flex items-start gap-3 rounded-2xl bg-blue-50/80 p-4 border border-blue-100">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white mt-0.5">
          <Info size={16} />
        </div>
        <div>
          <h4 className="text-xs font-bold text-blue-900 md:text-sm">Tip</h4>
          <p className="mt-0.5 text-xs text-blue-800 leading-relaxed">
            Make sure to check the official website for the most up-to-date
            information and application requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ScholarshipMainInfo;

