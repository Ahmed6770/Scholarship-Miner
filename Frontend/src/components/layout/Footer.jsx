import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="mt-10 bg-[#1E3A5F] text-white md:mt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-[2fr_1fr_1fr] md:gap-10 md:px-6 md:py-12">
        {/* Logo */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Scholarship Miner" className="h-9 md:h-11" />
            <h2 className="text-base font-bold md:text-lg">Scholarship Miner</h2>
          </Link>

          <p className="mt-3 max-w-sm text-xs leading-5 text-blue-100/80 md:text-sm md:leading-6">
            Helping students discover verified scholarship opportunities worldwide.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="mb-3 text-sm font-semibold md:text-base">Navigation</h3>
          <ul className="space-y-1.5 text-xs text-blue-100/80 md:space-y-2 md:text-sm">
            <li>
              <Link to="/" className="transition-colors duration-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/scholarships" className="transition-colors duration-300 hover:text-white">
                Scholarships
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="transition-colors duration-300 hover:text-white">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors duration-300 hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Saved & Quick Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold md:text-base">Quick Links</h3>
          <ul className="space-y-1.5 text-xs text-blue-100/80 md:space-y-2 md:text-sm">
            <li>
              <Link to="/saved" className="transition-colors duration-300 hover:text-white">
                Saved Scholarships
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex items-center justify-center px-4 py-3.5 text-center text-xs text-blue-100/70 md:px-6 md:py-4 md:text-sm">
          <p>© 2026 Scholarship Miner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
