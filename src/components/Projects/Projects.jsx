import React, { useEffect, useRef } from "react";

const Projects = () => {
  const refs = useRef([]);

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
      icon: "🚀",
      title: "E-Commerce Platform",
      desc: "Full-stack e-commerce solution with real-time inventory management and secure payment integration.",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-cyan-500/10 to-indigo-500/10",
    },
    {
      icon: "📱",
      title: "Mobile Social App",
      desc: "Cross-platform mobile application with real-time messaging and social networking features.",
      tech: ["React Native", "NestJS", "PostgreSQL"],
      gradient: "from-indigo-500/10 to-purple-500/10",
    },
    {
      icon: "⚡",
      title: "SaaS Dashboard",
      desc: "Modern analytics dashboard with SSR and advanced data visualization.",
      tech: ["Next.js", "Express.js", "MongoDB"],
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              ref={(el) => (refs.current[i] = el)}
              className="fade-up group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-indigo-500/20 rounded-3xl overflow-hidden hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Project icon/image area */}
              <div
                className={`h-56 flex items-center justify-center text-7xl bg-gradient-to-br ${p.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {p.icon}
                </span>
              </div>

              {/* Project content */}
              <div className="p-7 relative">
                <h3 className="text-indigo-400 text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-300 bg-indigo-500/10 border border-indigo-500/30 px-3 py-1.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
