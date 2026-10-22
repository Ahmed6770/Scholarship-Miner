import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../../../assets/images/logo.webp";

function HowItWorksCTA() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div
          className="rounded-3xl bg-blue-50/70 border border-blue-100 p-6 md:p-10 flex flex-col
         md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
            <div className="flex h-25 w-25 shrink-0 items-center justify-center rounded-2xl p-2.5">
              <img
                src={logo}
                alt="Logo"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                Ready to Find Your Next Opportunity?
              </h2>
              <p className="mt-1 text-xs text-gray-600 md:text-sm">
                Join thousands of students finding scholarships every day.
              </p>
            </div>
          </div>

          <Link
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm
             font-semibold text-white transition-colors hover:bg-blue-700 shrink-0"
            to="/scholarships"
          >
            <span>Start Searching Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksCTA;
