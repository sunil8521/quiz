import { useEffect, useRef, useState } from "react";
import { Question } from "@/data/questions";
import { cn } from "@/lib/utils";

interface AnswerState {
  selectedOption: number | null;
  isCorrect: boolean | null;
}

interface QuestionCardProps {
  question: Question;
  savedAnswer?: AnswerState;
  onAnswer: (selectedOption: number) => void;
}

const QuestionCard = ({ question, savedAnswer, onAnswer }: QuestionCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // --- Sounds ---
  const correctSound = useRef<HTMLAudioElement | null>(new Audio("/sounds/correct.mp3"));
  const wrongSound = useRef<HTMLAudioElement | null>(new Audio("/sounds/wrong1.mp3"));

  // Load saved answer when navigating back
  useEffect(() => {
    if (savedAnswer) {
      setSelectedOption(savedAnswer.selectedOption);
      setShowResult(true);
    } else {
      setSelectedOption(null);
      setShowResult(false);
    }
  }, [savedAnswer]);

  const handleOptionClick = (optionIndex: number) => {
    // prevent re-answering
    if (savedAnswer) return;

    setSelectedOption(optionIndex);
    setShowResult(true);

    const isCorrect = optionIndex === question.correctAnswer;

    setTimeout(() => {
      if (isCorrect) correctSound.current?.play();
      else wrongSound.current?.play();
    }, 100);

    onAnswer(optionIndex);
  };

  const getOptionClassName = (index: number) => {
    if (!showResult) {
      return "bg-white hover:bg-blue-50 hover:scale-[1.02] cursor-pointer";
    }

    if (index === question.correctAnswer) {
      return "bg-green-100 border-green-500 text-green-800 scale-[1.02]";
    }

    if (index === selectedOption && index !== question.correctAnswer) {
      return "bg-red-100 border-red-500 text-red-800 scale-[1.02]";
    }

    return "bg-white opacity-60";
  };

  return (
    <div className="flex items-center justify-center px-4 py-10 bg-gradient-to-br from-slate-100 to-gray-200 font-[Noto_Sans_Oriya]">
      <div className="w-full max-w-3xl space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl text-center border">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {question.question}
          </h2>
        </div>

        <div className="grid gap-5">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={!!savedAnswer}
              className={cn(
                "w-full p-5 md:p-6 rounded-2xl text-left text-lg font-semibold border transition-all",
                getOptionClassName(index)
              )}
            >
              <span className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-800">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
