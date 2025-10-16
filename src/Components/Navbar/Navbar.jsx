import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../../../Data/Data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white text-sm py-3 shadow dark:bg-neutral-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-x-3">
          <div className="w-10 h-10 rounded-lg bg-orange flex items-center justify-center text-white font-bold">
            R
          </div>
          <div>
            <h1 className="text-lg font-semibold">RecipeHub</h1>
            <p className="text-xs text-gray-500">The best place to find recipes</p>
          </div>
        </Link>

        {/* Buttons */}
        <div className="sm:order-3 flex items-center gap-x-2">
          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden size-9 flex transition-all duration-300 justify-center items-center rounded-lg border border-gray-200 bg-white text-gray-800 shadow hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1={3} x2={21} y1={6} y2={6} />
                <line x1={3} x2={21} y1={12} y2={12} />
                <line x1={3} x2={21} y1={18} y2={18} />
              </svg>
            )}
          </button>

          {/* Sign in */}
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
          >
            Sign in
          </button>
        </div>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } sm:block basis-full grow sm:grow-0 transition-all duration-300 sm:basis-auto sm:order-2`}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium w-fit text-gray-500 hover:text-orange-500 dark:text-gray-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
