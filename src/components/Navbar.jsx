import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/socials", label: "Social Media" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">EB</p>
      </NavLink>

      {/* Desktop nav */}
      <nav className="hidden sm:flex text-lg gap-7 font-medium">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile hamburger button */}
      <button
        className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="sm:hidden absolute top-full left-0 right-0 bg-white shadow-md flex flex-col font-medium text-lg z-50">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-8 py-4 border-b border-gray-100 ${isActive ? "text-blue-500" : "text-black"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
