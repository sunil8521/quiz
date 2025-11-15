import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getQuizState } from "@/utils/localStorageUtils";
import { Brain, Sparkles, Zap } from "lucide-react";
import { Flame, Gem, CloudLightning, Rainbow, Mountain } from "lucide-react";
import { Mic } from "lucide-react"; //
const Landing = () => {
  const navigate = useNavigate();
  const [variant, setVariant] = useState(0);
  const quizState = getQuizState();

  useEffect(() => {
    setVariant(Math.floor(Math.random() * 4));
  }, []);

  const handleStartQuiz = () => {
    navigate("/quiz");
  };
 const variants = [
    // Variant 1 — Warm Orange (best for Odia)
    // {
    //   background: "bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500",
    //   icon: <Brain className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />,
    //   decoration: (
    //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
    //       <div className="absolute top-20 left-10 w-28 h-28 bg-white/10 rounded-full blur-2xl animate-pulse" />
    //       <div className="absolute bottom-20 right-10 w-36 h-36 bg-white/10 rounded-full blur-3xl" />
    //     </div>
    //   ),
    // },

    // Variant 2 — Emerald Teal (calm, professional)
    {
      background: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500",
      icon: <Gem className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />,
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-14 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-14 right-14 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        </div>
      ),
    },

    // Variant 3 — Blue → Sky (clean modern)
    {
      background: "bg-gradient-to-br from-blue-700 via-blue-500 to-sky-400",
      icon: <Zap className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />,
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-44 h-44 bg-white/10 rounded-full blur-2xl" />
        </div>
      ),
    },

    // Variant 4 — Indigo Violet (serious quiz theme)
    {
      background: "bg-gradient-to-br from-indigo-900 via-purple-700 to-violet-900",
      icon: <Mountain className="w-20 h-20 md:w-32 md:h-32 text-indigo-200 animate-pulse" />,
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      ),
    },

    // Variant 5 — Crystal Blue (subtle + clean)
    {
      background: "bg-gradient-to-br from-sky-300 via-indigo-400 to-violet-500",
      icon: <CloudLightning className="w-20 h-20 md:w-32 md:h-32 text-white/90 animate-pulse" />,
      decoration: (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-8 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-12 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
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
          <div className="mb-8 flex justify-center"><img src="./micc.png" className="w-72 " alt="Logo" /></div>

          {/* MAIN TITLE — FIXED */}
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-4 drop-shadow-lg">
            ସାଧାରଣ ଜ୍ଞାନ
          </h1>

          {/* SUBTITLE */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow">
            ମିଳିତ ସାମ୍ବାଦିକ ସଂଘ, ଜଳେଶ୍ୱର — ଜାତୀୟ ପ୍ରେସ୍ ଦିବସ କୁଇଜ୍
          </p>

                   <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-8 border border-white/20">
            <p className="text-3xl md:text-4xl font-semibold text-white mb-2">
              ପ୍ରତୀଯୋଗୀ #{quizState.currentStudent}
            </p>
            <p className="text-white/80 text-lg">10ଟି ରୋଚକ ପ୍ରଶ୍ନ ପାଇଁ ପ୍ରସ୍ତୁତ କି?</p>
          </div>

          <Button
            onClick={handleStartQuiz}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-bold text-xl px-12 py-8 rounded-2xl hover:scale-105 transition-all duration-500 shadow-2xl animate-bounce-subtle"
          >
            କୁଇଜ୍ ଆରମ୍ଭ କରନ୍ତୁ 🚀
          </Button>

          {quizState.completedStudents > 0 && (
            <p className="mt-8 text-white/70 text-sm">
              {quizState.completedStudents} ଜଣ ଛାତ୍ର ସମାପ୍ତ କରିଛନ୍ତି
            </p>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default Landing;
