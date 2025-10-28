import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-35px, 35px) scale(1.05); }
          66% { transform: translate(30px, -25px) scale(0.95); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.08); }
        }
        .animate-float-slow { animation: float-slow 25s infinite ease-in-out; }
        .animate-float-medium { animation: float-medium 20s infinite ease-in-out; }
        .animate-float-fast { animation: float-fast 15s infinite ease-in-out; }

        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-down { animation: slide-down 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.8s ease-out 0.2s both; }
        .animate-slide-up-delay { animation: slide-up 0.8s ease-out 0.4s both; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.6s both; }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        html { scroll-behavior: smooth; }
      `}</style>
        <main>
          <Hero />
          <Skills />

          <Projects />

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
