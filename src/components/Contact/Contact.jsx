import React from "react";

const Contact = () => {
  const contacts = [
    {
      icon: "✉️",
      label: "Email",
      href: "mailto:muzammil.hassan.dev7@gmail.com",
      color: "cyan",
    },
    {
      icon: "💻",
      label: "GitHub",
      href: "https://github.com/Muzammil96313",
      color: "indigo",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "linkedin.com/in/muzammil-hassan-085498330/",
      color: "purple",
    },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-black via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Let's build something amazing together!
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-cyan-500/20 group-hover:border-cyan-400/50 text-3xl mb-3 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                {c.icon}
              </div>
              <span className="font-medium">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
