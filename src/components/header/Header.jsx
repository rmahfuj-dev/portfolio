import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(20,20,20,0.5)] border-b border-green-500/20">
      <div className="navbar">
        <div className="flex-1">
          <HashLink to="#hero" className="btn btn-ghost text-2xl text-green-400">
            Mahfuj
          </HashLink>
        </div>

        <div className="flex-none flex items-center gap-2">
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li><HashLink to="#hero">Home</HashLink></li>
              <li><HashLink to="#services">Services</HashLink></li>
              <li><HashLink to="#skills">Skills</HashLink></li>
              <li><HashLink to="#education">Education</HashLink></li>
              <li><HashLink to="#clients">Clients</HashLink></li>
              <li><HashLink to="#team">Team</HashLink></li>
              <li><HashLink to="#about">About</HashLink></li>
              <li><HashLink to="#contact">Contact</HashLink></li>
            </ul>
          </div>

          <div className="lg:hidden relative">
            <button
              onClick={() => setOpen(!open)}
              className="btn btn-ghost"
            >
              {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>

            {open && (
              <ul className="menu menu-sm absolute right-0 top-8 mt-2 w-52 p-2 bg-[rgba(20,20,20,0.5)] backdrop-blur-md rounded-box border border-green-500/20 z-50">
                <li><HashLink smooth to="#hero">Home</HashLink></li>
                <li><HashLink smooth to="#services">Services</HashLink></li>
                <li><HashLink smooth to="#skills">Skills</HashLink></li>
                <li><HashLink smooth to="#education">Education</HashLink></li>
                <li><HashLink smooth to="#clients">Clients</HashLink></li>
                <li><HashLink smooth to="#team">Team</HashLink></li>
                <li><HashLink smooth to="#about">About</HashLink></li>
                <li><HashLink smooth to="#contact">Contact</HashLink></li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
