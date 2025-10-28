import React, { useEffect, useRef } from "react";

const skills = [
  {
    title: "Frontend",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "React Native"],
  },
  { title: "Backend", tags: ["Node.js", "Express.js", "NestJS"] },
  { title: "Database", tags: ["MongoDB", "PostgreSQL"] },
];

const Skills = () => {
  const refs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 }
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const skills = [
    {
      title: "Frontend",
      icon: "🎨",
      tags: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "React Native"],
      color: "cyan",
    },
    {
      title: "Backend",
      icon: "⚙️",
      tags: ["Node.js", "Express.js", "NestJS"],
      color: "indigo",
    },
    {
      title: "Database",
      icon: "💾",
      tags: ["MongoDB", "PostgreSQL"],
      color: "purple",
    },
  ];

  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust and scalable
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => (refs.current[i] = el)}
              className="fade-up group relative bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20 p-8 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-indigo-500/5 group-hover:to-purple-500/5 rounded-3xl transition-all duration-500"></div>

              <div className="relative">
                <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-cyan-400 text-2xl font-bold mb-6">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.tags.map((t) => (
                    <span
                      key={t}
                      className="text-sm text-gray-300 border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
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

export default Skills;
