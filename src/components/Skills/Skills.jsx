import React from "react";

const Skills = () => {
  return (
    <div className="bg-black text-white " id="skills">
      <div className="container grid items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 py-20">
        <div>
          <img className="w-full rounded-xl h-full" src="skills.webp" alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-10">Skills & Expertise</h1>
          <div className="p-4 hover:bg-gray-800 rounded-lg my-8">
            <h2 className="text-xl font-bold">HTML, CSS, JAVASCRIPT</h2>
            <p>Expertise in crafting responsive and modern web interfaces.</p>
          </div>
          <div className="p-4 hover:bg-gray-800 rounded-lg my-8">
            <h2 className="text-xl font-bold">REACT, NODE, MONGODB</h2>
            <p>Experience building dynamic and interactive SPAs.</p>
          </div>
          <div className="p-4 hover:bg-gray-800 rounded-lg my-8">
            <h2 className="text-xl font-bold">Performance Optimization</h2>
            <p>
              Enhancing website speed and ensuring a smooth user experience.
              UI/UX
            </p>
          </div>
          <div className="p-4 hover:bg-gray-800 rounded-lg my-8">
            <h2 className="text-xl font-bold">UI/UX DESIGNS</h2>
            <p>
              Design Designing user-friendly and visually appealing interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
