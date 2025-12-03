import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Full Stack Developer", "React Specialist", "Backend Engineer", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-[10%] left-[15%] w-96 h-96 rounded-full bg-cyan-400/20 blur-[140px] animate-float-slow"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[160px] animate-float-medium"></div>
        <div className="absolute top-[50%] left-[50%] w-72 h-72 rounded-full bg-purple-500/15 blur-[120px] animate-float-fast"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] right-[20%] w-20 h-20 border border-cyan-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-[30%] left-[10%] w-16 h-16 border border-indigo-500/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[15%] w-12 h-12 border border-purple-500/20 rotate-12 animate-float-fast"></div>
        <div className="absolute top-[15%] left-[40%] w-8 h-8 bg-cyan-500/10 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-[20%] right-[35%] w-6 h-6 bg-indigo-500/10 rotate-45 animate-bounce-slow"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>
      </div>

      {/* Decorative code snippet */}
      <div className="absolute top-32 left-8 md:left-16 hidden md:block opacity-20 hover:opacity-40 transition-opacity duration-500">
        <pre className="text-left text-xs text-cyan-400 font-mono">
{`const developer = {
  name: "Muzammil",
  skills: ["React", "Node"],
  passion: "Building"
};`}
        </pre>
      </div>

      <div className="absolute bottom-32 right-8 md:right-16 hidden md:block opacity-20 hover:opacity-40 transition-opacity duration-500">
        <pre className="text-right text-xs text-indigo-400 font-mono">
{`// Let's build
// something amazing
// together`}
        </pre>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 space-y-8 animate-fade-in">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 animate-slide-down">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-cyan-400 text-sm font-medium">Available for work</span>
        </div>

        <div className="space-y-4">
          <p className="text-gray-400 text-lg md:text-xl animate-slide-down">
            Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black animate-slide-up leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Muzammil
            </span>
          </h1>

          {/* Typing animation */}
          <div className="h-8 md:h-10 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-indigo-400">{displayText}</span>
              <span className="animate-blink text-cyan-400">|</span>
              <span className="text-cyan-400">/&gt;</span>
            </p>
          </div>
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed animate-slide-up-delay">
          Crafting seamless digital experiences from front to back. Specializing
          in modern web and mobile technologies with a focus on
          <span className="text-cyan-400"> innovation</span> and
          <span className="text-indigo-400"> performance</span>.
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 py-6 animate-slide-up-delay">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">2+</p>
            <p className="text-gray-500 text-sm">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">15+</p>
            <p className="text-gray-500 text-sm">Projects Done</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">10+</p>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center flex-wrap animate-slide-up-delay-2">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Let's Connect</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            className="group inline-flex items-center gap-2 border-2 border-cyan-500/50 text-cyan-400 font-semibold py-4 px-8 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
          >
            <span>View Work</span>
            <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 pt-4 animate-slide-up-delay-2">
          <a href="https://github.com/Muzammil96313" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-700 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/muzammil-hassan-085498330/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 group">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:muzammil.hassan.dev7@gmail.com" className="p-3 rounded-full border border-gray-700 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
