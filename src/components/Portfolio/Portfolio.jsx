import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black text-white" id="portfolio">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img className="rounded-lg" src="computer.webp" alt="" />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">E-Commerce Website</h4>
              <button className="btn">Preview</button>
            </div>
          </div>
          <div>
            <img className="rounded-lg" src="computer.webp" alt="" />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">E-Commerce Website</h4>
              <button className="btn">Preview</button>
            </div>
          </div>
          <div>
            <img className="rounded-lg" src="computer.webp" alt="" />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">E-Commerce Website</h4>
              <button className="btn">Preview</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
