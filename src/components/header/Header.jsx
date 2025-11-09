import React from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="h-[10vh] sticky top-0 z-50 backdrop-blur-md bg-[rgba(20,20,20,0.5)] border-b border-green-500/20">
      <div className="navbar">
        <div className="flex-1">
          <HashLink smooth to="#hero" className="btn btn-ghost text-2xl text-green-400">
            Mahfuj
          </HashLink>
        </div>

        <div className="flex-none flex items-center gap-2">
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li>
                <HashLink smooth to="#">Home</HashLink>
              </li>
              <li>
                <HashLink smooth to="#about">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="#services">Services</HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact">Contact</HashLink>
              </li>
            </ul>
          </div>

          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[rgba(20,20,20,0.5)] backdrop-blur-md rounded-box z-[50] mt-3 w-52 p-2 border border-green-500/20"
            >
              <li>
                <HashLink smooth to="#">Home</HashLink>
              </li>
              <li>
                <HashLink smooth to="#about">About</HashLink>
              </li>
              <li>
                <HashLink smooth to="#services">Services</HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact">Contact</HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
