import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 bg-black flex justify-between items-center px-4 text-white border-b border-gray-600 lg:sticky md:static top-0 z-50">
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Muzammil's Portfolio </h1>
          </div>
          <div className="hidden lg:block">
            <ul className="lg:flex gap-8">
              <li>
                <a className="text-lg font-semibold" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="text-lg font-semibold" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a className="text-lg font-semibold" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-lg font-semibold" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-lg font-semibold" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
