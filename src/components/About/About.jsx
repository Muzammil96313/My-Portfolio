import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-10 lg:pb-10 md:pb-5" id="about">
      <div className="container lg:py-10 sm:pb-8">
        <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1  gap-10 items-center">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-10">About Me</h1>
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-lg mb-4">
              Hi, I’m Muzammil, a passionate and dedicated freelance frontend
              developer specializing in React.js. I thrive on creating dynamic,
              responsive, and user-friendly web applications that exceed
              expectations.
            </p>
            <h2 className="text-2xl font-semibold mb-4">My Mission</h2>
            <p className="text-lg mb-4">
              To help individuals and businesses bring their ideas to life with
              cutting-edge web solutions, ensuring seamless performance and
              intuitive user experiences.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Me?</h2>
            <ul>
              <li className="text-lg mb-4">
                <strong>Expert in React.js</strong>: Crafting high-quality,
                scalable, and modern web interfaces.
              </li>
              <li className="text-lg mb-4">
                <strong>Dedicated Freelancer</strong>: Focused on delivering
                tailored solutions with a personal touch.
              </li>
              <li className="text-lg mb-4">
                <strong> Problem Solver</strong>: Turning complex requirements
                into simple, elegant web solutions.
              </li>
            </ul>
          </div>
          <div className="w-full">
            <img src="About.webp" className="rounded-xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
