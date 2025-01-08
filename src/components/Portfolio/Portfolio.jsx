import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black text-white" id="portfolio">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <img
              className="rounded-lg h-[400px] max-h-full"
              src="blog.webp"
              alt=""
            />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Blog App</h4>
              <a href="https://blog-murex-ten-84.vercel.app/" target="_blank">
                <button className="btn">Preview</button>
              </a>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg h-[400px] max-h-full bg-contain"
              src="pokemon.jpg"
              alt=""
            />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Pokemon Website</h4>
              <a href="https://muzammil-pokemon.netlify.app/" target="_blank">
                <button className="btn">Preview</button>
              </a>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg h-[400px] max-h-full"
              src="computer.webp"
              alt=""
            />
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold">Chat Gpt3 Clone Website</h4>
              <a href="https://gpt3clone3.netlify.app/" target="_blank">
                <button className="btn">Preview</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
