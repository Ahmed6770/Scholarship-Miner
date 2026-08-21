import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);
  function toggleAccordion(id) {
    openQuestion === id ? setOpenQuestion(null) : setOpenQuestion(id);
  }
  return (
    <section id="faq" className="bg-slate-50 py-8 md:py-16 px-4 md:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-5 shadow-xs md:rounded-3xl md:p-8">
        <div className="mb-6 text-center md:mb-10">
          <h2 className="text-[22px] font-bold text-gray-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-gray-600 md:text-base md:leading-7">
            Find answers to the most common questions about Scholarship Miner and
            how it helps you discover scholarship opportunities.
          </p>
        </div>
        <div>
          {/* Questions */}
          {faqs.map((faq) => (
            <div
              className="cursor-pointer border-b border-gray-100 py-4 transition-colors duration-200 hover:bg-slate-50/50 md:py-5"
              onClick={() => toggleAccordion(faq.id)}
              key={faq.id}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                  {faq.question}
                </h3>
                {openQuestion === faq.id ? (
                  <Minus className="h-5 w-5 shrink-0 text-blue-600" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-gray-500" />
                )}
              </div>

              {/* Answer */}
              {openQuestion === faq.id && (
                <p className="mt-2 pr-6 text-xs leading-5 text-gray-600 md:mt-3 md:text-sm md:leading-6">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;

const faqs = [
  {
    id: 1,
    question: "How does Scholarship Miner find scholarships?",
    answer:
      "Scholarship Miner curates and categorizes verified scholarship opportunities worldwide, allowing you to easily search and filter by degree, country, and field of study.",
  },
  {
    id: 2,
    question: "Is Scholarship Miner free to use?",
    answer:
      "Yes. You can search, explore, and save scholarship opportunities completely free of charge.",
  },
  {
    id: 3,
    question: "Can I apply directly through the platform?",
    answer:
      "No. We redirect you to the official scholarship website so you can submit your application securely through the organization offering the scholarship.",
  },
  {
    id: 4,
    question: "How often is the scholarship database updated?",
    answer:
      "Our database is updated regularly to include new opportunities and remove expired scholarships, helping you discover the latest available programs.",
  },
  {
    id: 5,
    question: "Which countries and universities are supported?",
    answer:
      "Scholarship Miner includes opportunities from universities and organizations across many countries, covering undergraduate, master's, and PhD programs.",
  },
  {
    id: 6,
    question: "Can I save scholarships for later?",
    answer:
      "Yes. You can bookmark scholarships, organize your favorites, and easily return to them whenever you're ready to apply.",
  },
];