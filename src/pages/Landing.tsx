import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getQuizState } from "@/utils/localStorageUtils";
import { Brain, Sparkles, Zap } from "lucide-react";
import { Flame, Gem, CloudLightning, Rainbow, Mountain } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [variant, setVariant] = useState(0);
  const quizState = getQuizState();

  useEffect(() => {
    setVariant(Math.floor(Math.random() * 3));
  }, []);

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  // const variants = [
  //   // Variant 1: Blue to Purple gradient
  //   {
  //     background: "bg-gradient-to-br from-primary via-accent to-secondary",
  //     icon: <Brain className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse-glow" />,
  //     decoration: (
  //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //         <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
  //         <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
  //         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
  //       </div>
  //     ),
  //   },
  //   // Variant 2: Orange to Pink gradient
  //   {
  //     background: "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600",
  //     icon: <Sparkles className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-bounce-subtle" />,
  //     decoration: (
  //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //         <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-pulse" />
  //         <div className="absolute bottom-32 left-16 w-20 h-20 bg-white/10 rounded-full animate-bounce-subtle" />
  //         <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: "1.5s" }} />
  //       </div>
  //     ),
  //   },
  //   // Variant 3: Clean gradient with modern feel
  //   {
  //     background: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
  //     icon: <Zap className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />,
  //     decoration: (
  //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //         <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
  //         <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
  //       </div>
  //     ),
  //   },
  // ];

  const variants = [
    // Variant 1: Blue to Purple gradient
    {
      background: "bg-gradient-to-br from-primary via-accent to-secondary",
      icon: (
        <Brain className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      ),
    },

    // Variant 2: Orange to Pink gradient
    {
      background:
        "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600",
      icon: (
        <Sparkles className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-bounce" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-pulse" />
          <div className="absolute bottom-32 left-16 w-20 h-20 bg-white/10 rounded-full animate-bounce" />
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg -rotate-12 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      ),
    },

    // Variant 3: Clean Cyan to Indigo
    {
      background: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
      icon: (
        <Zap className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>
      ),
    },

    // 🟢 Variant 4: Fresh Mint & Teal
    {
      background: "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600",
      icon: (
        <Gem className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        </div>
      ),
    },

    // 🖤 Variant 5: Dark Neon (for contrast)
    {
      background: "bg-gradient-to-br from-gray-900 via-gray-800 to-black",
      icon: (
        <Flame className="w-20 h-20 md:w-32 md:h-32 text-yellow-400 animate-flicker" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-16 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
        </div>
      ),
    },

    // 💎 Variant 6: Crystal Sky
    {
      background: "bg-gradient-to-br from-sky-300 via-indigo-400 to-violet-500",
      icon: (
        <CloudLightning className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-44 h-44 bg-white/10 rounded-full blur-3xl" />
        </div>
      ),
    },

    // 🟣 Variant 7: Midnight Glow
    {
      background:
        "bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900",
      icon: (
        <Mountain className="w-20 h-20 md:w-32 md:h-32 text-indigo-200 animate-pulse" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-10 right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" />
        </div>
      ),
    },

    // 🌈 Variant 8: Rainbow Energy (fun landing)
    {
      background:
        "bg-gradient-to-tr from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-500",
      icon: (
        <Rainbow className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-spin-slow" />
      ),
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-white/5 blur-3xl opacity-10" />
        </div>
      ),
    },
  ];

  const currentVariant = variants[variant];

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 relative ${currentVariant.background}`}
    >
      {currentVariant.decoration}

      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">{currentVariant.icon}</div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            BrainRush Quiz
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
            Test Your Knowledge & Challenge Your Mind
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8 border border-white/20">
            <p className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome Student #{quizState.currentStudent}
            </p>
            <p className="text-white/80 text-lg">
              Ready to answer 10 exciting questions?
            </p>
          </div>

          <Button
            onClick={handleStartQuiz}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-8 rounded-2xl hover:scale-105 transition-all duration-500 shadow-2xl animate-bounce-subtle"
          >
            Start Quiz 🚀
          </Button>

          {quizState.completedStudents > 0 && (
            <p className="mt-8 text-white/70 text-sm">
              {quizState.completedStudents} student
              {quizState.completedStudents !== 1 ? "s" : ""} completed so far
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
