import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Bookmark } from "lucide-react";
import logo from "../../assets/images/logo.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Scholarships", path: "/scholarships" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About", path: "/about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white shadow-xs">
      <div className="relative mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:h-20 md:px-8">
        {/* Logo */}
        <Link to="/" className="z-10 flex items-center gap-2.5">
          <img className="h-9 md:h-12" src={logo} alt="Scholarship Miner logo" />
          <span className="text-base font-bold text-blue-600 sm:text-lg md:text-xl">
            Scholarship Miner
          </span>
        </Link>

        {/* Links in desktop */}
        <div className="hidden items-center justify-center gap-8 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink className={({ isActive }) =>
            `font-medium transition-colors duration-200 ${
              isActive
                ? "text-blue-600 underline underline-offset-8"
                : "text-gray-600 hover:text-blue-600"
              }`}
              key={link.path} to={link.path}>
                {link.label}
              </NavLink>
          ))}
        </div>

        <div className="z-10 flex items-center justify-end gap-3">
          <Link className="hidden items-center gap-1.5 rounded-xl bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-100 md:flex md:px-4 md:py-2 md:text-sm"
            to="/saved">
            <Bookmark size={17} />
            <span>Saved</span>
          </Link>

          <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 md:hidden"
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink className="py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
                key={link.path}
                onClick={closeMenu}
                to={link.path}
              >
                {link.label}
              </NavLink>
            ))}
            <Link className="py-2 font-medium text-gray-600 transition-colors hover:text-blue-600"
              onClick={closeMenu}
              to="/saved"
            >
              Saved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
