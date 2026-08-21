import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

function CTA() {
  return (
    <section className="bg-slate-50 py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-blue-50 px-5 py-6 text-center md:flex-row md:rounded-3xl md:px-10 md:py-8 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-xs md:h-16 md:w-16">
              <Rocket
                className="rocket-float h-6 w-6 text-blue-600 md:h-8 md:w-8"
                strokeWidth={2.2}
              />
            </div>

            <div>
              <h2 className="text-[20px] font-bold text-gray-900 md:text-3xl">
                Ready to Find Your Perfect Scholarship?
              </h2>

              <p className="mt-1.5 max-w-xl text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
                Join thousands of students who have found their dream
                opportunities with Scholarship Miner Assistant.
              </p>
            </div>
          </div>

          {/* Button */}
          <Link
            to="/scholarships"
            className="w-full shrink-0 cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700 md:w-auto md:px-6 md:py-3 md:text-base"
          >
            Start Your Journey →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
