import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/hero.webp";
import "./home.css";
import { GraduationCap, CheckCircle2, Globe } from "lucide-react";
  const stats = [
  {
    number: "10,000+",
    title: "Scholarships Listed",
    icon: <GraduationCap />,
  },
  {
    number: "100%",
    title: "Free & Verified",
    icon: <CheckCircle2 />,
  },
  {
    number: "50+",
    title: "Countries Covered",
    icon: <Globe />,
  },
]
function HeroHome() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-16">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-12">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            Find Your Next <br />
            <span className="text-blue-600">Scholarship Opportunity</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600 md:text-base md:leading-7">
            Search and filter verified global scholarship opportunities by
            degree level, country, and field of study.
          </p>

          {/* Image for mobile */}
          <div className="my-4 mx-auto w-2/3 max-w-[240px] md:hidden">
            <img src={image} alt="Hero image" className="hero-image w-full" />
          </div>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:justify-start">
            <Link className="cursor-pointer rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white
             transition-all duration-200 hover:bg-blue-700 md:px-6 md:py-3 md:text-base"
              to="/scholarships"
            >
              Start Searching
            </Link>

            <Link className="cursor-pointer rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold
             text-gray-700 transition-all duration-200 hover:border-blue-600 hover:text-blue-600 md:px-6 md:py-3 md:text-base"
              to="/about"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image for desktop */}
        <div className="hidden w-full max-w-md md:block lg:max-w-lg">
          <img src={image} alt="Hero" className="hero-image w-full" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
        {stats.map((item) => (
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xs md:p-6"
            key={item.title}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 md:h-12 md:w-12">
              <div className="text-blue-600">{item.icon}</div>
            </div>

            <h3 className="mt-3 text-xl font-bold text-blue-600 md:text-3xl">
              {item.number}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600 md:text-sm">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroHome;