import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="hero"
        className="flex items-center text-white py-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(laptop.webp)",
          height: "80vh",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="container  py-10 w-full">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Welcome To Muzammil Portfolio
            </h1>
            <p className="text-xl">
              Building modern and responsive web applications
            </p>
            <button className="btn">
              <a href="#portfolio">View More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
