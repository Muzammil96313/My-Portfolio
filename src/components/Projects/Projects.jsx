import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const refs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const projects = [
    {
      image: "/laptop.webp",
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with real-time inventory management, secure payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-cyan-500/20 to-indigo-500/20",
      accentColor: "cyan",
      category: "Full Stack",
      github: "#",
      live: "#",
    },
    {
      image: "/computer.webp",
      title: "SaaS Dashboard",
      desc: "Modern analytics dashboard with SSR, advanced data visualization, real-time updates, and role-based access control.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "Chart.js"],
      gradient: "from-indigo-500/20 to-purple-500/20",
      accentColor: "indigo",
      category: "Frontend",
      github: "#",
      live: "#",
    },
    {
      image: "/blog.webp",
      title: "Blog Platform",
      desc: "A modern blogging platform with markdown support, comment system, and SEO optimization for better reach.",
      tech: ["React", "NestJS", "MongoDB", "Redis"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple",
      category: "Full Stack",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            My Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => (refs.current[i] = el)}
              className="fade-up group relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-700 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Project image area */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${p.accentColor}-500/20 text-${p.accentColor}-400 border border-${p.accentColor}-500/30 backdrop-blur-sm`}>
                    {p.category}
                  </span>
                </div>

                {/* Hover overlay with links */}
                <div className={`absolute inset-0 bg-gray-950/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-all duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                  <a
                    href={p.github}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label="View GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href={p.live}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label="View Live"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-7 relative">
                <h3 className={`text-${p.accentColor}-400 text-xl font-bold mb-3 group-hover:text-${p.accentColor}-300 transition-colors`}>
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed text-sm">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs text-gray-300 bg-gray-800/80 border border-gray-700 px-3 py-1.5 rounded-lg hover:border-${p.accentColor}-500/30 hover:bg-gray-800 transition-all duration-300`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Muzammil96313"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
