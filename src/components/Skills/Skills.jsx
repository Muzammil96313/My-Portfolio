import { useEffect, useRef } from "react";

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
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tags: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 92 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
      ],
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-400",
    },
    {
      title: "Backend",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tags: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "NestJS", level: 75 },
      ],
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-400",
    },
    {
      title: "Database",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      tags: [
        { name: "MongoDB", level: 88 },
        { name: "PostgreSQL", level: 82 },
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-400",
    },
  ];

  const tools = [
    { name: "Git", icon: "M21.623 11.3l-9.382-9.382a1.276 1.276 0 00-1.796 0L8.2 4.163l2.25 2.25a1.508 1.508 0 011.896 1.896l2.169 2.169a1.509 1.509 0 11-.896.861l-2.023-2.022v5.313a1.509 1.509 0 11-1.238-.012V9.151a1.509 1.509 0 01-.819-1.977l-2.218-2.218-5.862 5.861a1.276 1.276 0 000 1.797l9.382 9.382a1.276 1.276 0 001.796 0l9.086-9.086a1.276 1.276 0 000-1.61z" },
    { name: "Docker", icon: "M21.805 10.077a4.32 4.32 0 00-2.123-.497c-.507 0-1.003.069-1.48.198a3.48 3.48 0 00-1.523-1.843l-.304-.19-.19.304c-.392.627-.586 1.413-.523 2.171a2.52 2.52 0 00.504 1.374c-.467.257-1.218.42-2.317.42H1.05l-.035.247c-.087.626-.087 1.286 0 1.946a7.97 7.97 0 002.123 4.418c1.12 1.217 2.7 1.937 4.578 2.085.328.027.66.04.993.04 2.03 0 3.97-.47 5.55-1.345a9.77 9.77 0 002.584-2.024 11.02 11.02 0 002.158-3.51h.184c1.152 0 1.895-.446 2.328-.821.33-.286.583-.643.735-1.049l.087-.285-.33-.239zm-18.59.91h1.7a.17.17 0 00.17-.17V9.22a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.076.17.17.17zm2.463 0h1.7a.17.17 0 00.17-.17V9.22a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.076.17.17.17zm2.497 0h1.699a.17.17 0 00.17-.17V9.22a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.077.17.17.17zm2.498 0h1.699a.17.17 0 00.17-.17V9.22a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.077.17.17.17zm-4.995-2.38h1.7a.17.17 0 00.17-.17V6.84a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.076.17.17.17zm2.497 0h1.699a.17.17 0 00.17-.17V6.84a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.077.17.17.17zm2.498 0h1.699a.17.17 0 00.17-.17V6.84a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.077.17.17.17zm0-2.38h1.699a.17.17 0 00.17-.17V4.46a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .093.077.17.17.17zm2.499 4.76h1.699a.17.17 0 00.17-.17V9.22a.17.17 0 00-.17-.17h-1.7a.17.17 0 00-.17.17v1.598c0 .094.077.17.17.17z" },
    { name: "VS Code", icon: "M23.15 2.587L18.21.21a1.166 1.166 0 00-1.33.231l-8.33 7.6L4.06 4.7a.78.78 0 00-.99.04L.63 6.96a.775.775 0 000 1.17l3.96 3.6-3.96 3.6a.775.775 0 000 1.17l2.44 2.22c.27.24.67.26.99.04l4.49-3.34 8.33 7.6a1.16 1.16 0 001.33.23l4.94-2.38a1.17 1.17 0 00.64-1.04V3.63a1.17 1.17 0 00-.64-1.04zM17.66 17.63L10.5 12l7.16-5.63z" },
    { name: "Figma", icon: "M12 12a4 4 0 118 0 4 4 0 01-8 0zM4 20a4 4 0 014-4h4v4a4 4 0 11-8 0zM12 0v8h4a4 4 0 000-8h-4zM4 8a4 4 0 004 4h4V4H8a4 4 0 00-4 4zM4 12a4 4 0 014 4h4v-8H8a4 4 0 00-4 4z" },
    { name: "Postman", icon: "M13.527.099c6.456 0 11.674 5.218 11.674 11.673 0 6.456-5.218 11.674-11.674 11.674C7.071 23.446 1.853 18.228 1.853 11.772 1.853 5.317 7.07.099 13.527.099zm2.11 7.846a.48.48 0 00-.146-.088c-.007-.003-.016-.003-.023-.006a.477.477 0 00-.093-.022c-.01-.001-.02.002-.03.001a.464.464 0 00-.092.009c-.013.002-.024.001-.036.005-.014.005-.025.014-.039.02a.475.475 0 00-.123.079l-.013.013-4.641 4.641a.453.453 0 00.64.64l3.944-3.943 1.045 1.044a.424.424 0 01.002.598c-.009.009-3.044 3.179-3.044 3.179a.453.453 0 10.64.64s3.036-3.17 3.044-3.179a1.329 1.329 0 00-.005-1.876l-1.044-1.044.013-.014a.455.455 0 00-.001-.64z" },
    { name: "AWS", icon: "M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.264-.168.312a.549.549 0 01-.32.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.32.064.632.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.16.152.454.304.878.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.142.167z" },
  ];

  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-500/20 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            What I Do
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust and scalable
            solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((cat, i) => (
            <div
              key={cat.title}
              ref={(el) => (refs.current[i] = el)}
              className="fade-up group relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl hover:border-gray-700 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${cat.gradient} p-[1px]`}>
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center text-white">
                  {cat.icon}
                </div>
              </div>

              <h3 className={`text-${cat.color}-400 text-2xl font-bold mb-6`}>
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.tags.map((tag, tagIndex) => (
                  <div key={tag.name} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{tag.name}</span>
                      <span className={`text-${cat.color}-400 text-sm font-mono`}>{tag.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${tag.level}%`,
                          transitionDelay: `${tagIndex * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 hover:bg-gray-800/50 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d={tool.icon} />
                </svg>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
