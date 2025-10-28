import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-cyan-400/20 blur-[140px] animate-float-slow"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[160px] animate-float-medium"></div>
        <div className="absolute top-[50%] left-[50%] w-72 h-72 rounded-full bg-purple-500/15 blur-[120px] animate-float-fast"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 space-y-8 animate-fade-in">
        <div className="inline-block">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3 font-semibold animate-slide-down">
            Full Stack Developer
          </p>
        </div>

        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-slide-up leading-tight">
          Muzammil
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-xl leading-relaxed mb-10 animate-slide-up-delay">
          Crafting seamless digital experiences from front to back. Specializing
          in modern web and mobile technologies with a focus on innovation.
        </p>

        <div className="flex gap-4 justify-center animate-slide-up-delay-2">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span>Let's Connect</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 border-2 border-cyan-500/50 text-cyan-400 font-semibold py-4 px-8 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
