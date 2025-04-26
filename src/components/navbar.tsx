import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        "relative rounded-4xl shadow-md border border-gray-50 bg-white text-gray-500 px-6 py-4 transition-all duration-300"
      }
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="md:text-2xl text-xl font-bold text-blue-400">
          <NavLink to="/">Frontend eBook</NavLink>
        </div>

        {/* Hamburger Toggle (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav links (desktop) */}
        <ul className="hidden md:flex gap-6 items-center">
          <NavItem to={ROUTES.HOME} label="Home" end />
          <NavItem to={ROUTES.JAVASCRIPT} label="JavaScript" />
          <NavItem to={ROUTES.REACT_JS} label="ReactJs" />
          <NavItem to={ROUTES.HTML_CSS} label="Html/Css" />
        </ul>
      </div>

      {/* Nav links (mobile dropdown) */}
      {isOpen && (
        <ul className="absolute right-0 top-full bg-white text-gray-500 p-4 flex flex-col gap-4 shadow-lg rounded-md z-50 md:hidden">
          <NavItem to={ROUTES.HOME} label="Home" end />
          <NavItem to={ROUTES.JAVASCRIPT} label="JavaScript" />
          <NavItem to={ROUTES.REACT_JS} label="ReactJs" />
          <NavItem to={ROUTES.HTML_CSS} label="Html/Css" />
        </ul>
      )}
    </nav>
  );
}

// Reusable NavLink item
function NavItem({
  to,
  label,
  end = false,
  onClick,
}: {
  to: string;
  label: string;
  end?: boolean;
  onClick?: () => void;
}) {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) =>
          isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
        }
      >
        {label}
      </NavLink>
    </li>
  );
}
