import { useState, useRef } from "react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // --- Audio Setup ---
  const correctSound = useRef<HTMLAudioElement | null>(null);
  const wrongSound = useRef<HTMLAudioElement | null>(null);

  if (!correctSound.current) {
    correctSound.current = new Audio("/sounds/correct.mp3");
    wrongSound.current = new Audio("/sounds/wrong1.mp3");
  }

  const handleOptionClick = (optionIndex: number) => {
    if (showResult) return;

    setSelectedOption(optionIndex);
    setShowResult(true);

    const isCorrect = optionIndex === question.correctAnswer;

    // Play sound after small delay
    setTimeout(() => {
      if (isCorrect) correctSound.current?.play();
      else wrongSound.current?.play();
    }, 100);

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOption(null);
      setShowResult(false);
    }, 1500);
  };

  const getOptionClassName = (index: number) => {
    if (!showResult) {
      return "bg-white hover:bg-blue-50 hover:border-blue-300 hover:scale-[1.02] cursor-pointer";
    }

    if (index === question.correctAnswer) {
      return "bg-green-100 border-green-500 text-green-800 scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.3)]";
    }

    if (index === selectedOption && index !== question.correctAnswer) {
      return "bg-red-100 border-red-500 text-red-800 scale-[1.02] shadow-[0_0_15px_rgba(239,68,68,0.3)]";
    }

    return "bg-white opacity-60";
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-slate-100 to-gray-200 px-4 py-10 font-[Noto_Sans_Oriya]">
      <div className="w-full max-w-3xl space-y-8">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl text-center border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed tracking-wide break-words">
            {question.question}
          </h2>
        </div>

        <div className="grid gap-5">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={showResult}
              className={cn(
                "w-full p-5 md:p-6 rounded-2xl text-left text-lg md:text-xl font-semibold transition-all duration-300 border leading-relaxed tracking-wide",
                getOptionClassName(index)
              )}
            >
              <span className="flex items-start gap-4">
                <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-800">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-gray-900 break-words">{option}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
