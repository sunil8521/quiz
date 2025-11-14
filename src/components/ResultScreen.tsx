import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Trophy, Star, Award } from "lucide-react";
import { useEffect, useState } from "react";

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  studentNumber: number;
  completedStudents: number;
}

const ResultScreen = ({
  score,
  totalQuestions,
  studentNumber,
  completedStudents,
}: ResultScreenProps) => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 150);
    return () => clearTimeout(timeout);
  }, []);

  const getMessage = () => {
    if (percentage === 100) return "Perfect Score! 🎯";
    if (percentage >= 80) return "Excellent Work! 🌟";
    if (percentage >= 60) return "Great Job! 👍";
    if (percentage >= 40) return "Good Effort! 💪";
    return "Keep Practicing! 📘";
  };

  const getIcon = () => {
    if (percentage >= 80)
      return (
        <div className="bg-yellow-50/80 p-4 rounded-full shadow-sm ring-1 ring-yellow-100">
          <Trophy className="w-14 h-14 text-yellow-500" />
        </div>
      );
    if (percentage >= 60)
      return (
        <div className="bg-blue-50/80 p-4 rounded-full shadow-sm ring-1 ring-blue-100">
          <Star className="w-14 h-14 text-blue-500" />
        </div>
      );
    return (
      <div className="bg-gray-50/80 p-4 rounded-full shadow-sm ring-1 ring-gray-100">
        <Award className="w-14 h-14 text-gray-600" />
      </div>
    );
  };

  const handleNextStudent = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-50 to-neutral-100 px-6 py-12">
      <div
        className={`w-full max-w-xl bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-10 text-center transform transition-all duration-700 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex justify-center mb-6">{getIcon()}</div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
          {getMessage()}
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          You’ve completed this round of questions.
        </p>

        <div className="bg-gray-50 rounded-xl py-5 mb-6 border border-gray-100">
          <div className="flex items-baseline justify-center gap-3">
            <div className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-none">
              {score}
            </div>
            <div className="text-sm sm:text-base text-gray-500 self-end">
              out of {totalQuestions}
            </div>
          </div>

          <div className="mt-4 mx-8">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-600 font-medium">Score</div>
              <div className="text-sm font-semibold text-blue-600">{percentage}%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-3 rounded-full transition-all duration-700 ${
                  percentage >= 80
                    ? "bg-yellow-400"
                    : percentage >= 60
                    ? "bg-blue-500"
                    : "bg-gray-400"
                }`}
                style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                role="progressbar"
              />
            </div>
          </div>
        </div>

        <div className="mb-6 text-gray-600">
          <p className="text-sm">
            <span className="font-semibold text-gray-800">Student #{studentNumber}</span>{" "}
            completed
          </p>
          <p className="text-xs sm:text-sm mt-1">
            Total students completed:{" "}
            <span className="font-semibold text-gray-800">{completedStudents}</span>
          </p>
        </div>

        <Button
          onClick={handleNextStudent}
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md"
        >
          Next Student — Start Next Round
        </Button>

        <p className="mt-4 text-xs text-gray-400">
          Tip: Use the Next button to quickly move to the next student's round.
        </p>
      </div>
    </div>
  );
};

export default ResultScreen;