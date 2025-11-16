import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import { questions } from "@/data/questions";
import { 
  getQuizState, 
  saveQuizState, 
  addStudentScore, 
  advanceToNextStudent 
} from "@/utils/localStorageUtils";

const QUESTIONS_PER_STUDENT = 10;

interface AnswerState {
  selectedOption: number | null;
  isCorrect: boolean | null;
}

const Quiz = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // store answers persistently
  const [answers, setAnswers] = useState<Record<number, AnswerState>>({});

  const [quizState, setQuizState] = useState(getQuizState());

  // Load persistent quizState
  useEffect(() => {
    const state = getQuizState();

    if (state.questionIndex >= questions.length) {
      state.questionIndex = 0;
      saveQuizState(state);
    }

    setQuizState(state);
  }, []);

  const handleAnswer = (selectedOption: number) => {
    const globalIndex = quizState.questionIndex + currentQuestionIndex;
    const correctAnswer = questions[globalIndex % questions.length].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;

    if (isCorrect) setScore((prev) => prev + 1);

    // save answer
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: {
        selectedOption,
        isCorrect,
      },
    }));

    // move next automatically?
    // NO — now manual navigation with Next button
  };

  // Next button
  const goNext = () => {
    if (currentQuestionIndex + 1 < QUESTIONS_PER_STUDENT) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      return;
    }

    // quiz complete
    const finalScore = score;
    addStudentScore(quizState.currentStudent, finalScore, QUESTIONS_PER_STUDENT);
    advanceToNextStudent();

    const updatedState = getQuizState();
    updatedState.questionIndex = (quizState.questionIndex + QUESTIONS_PER_STUDENT) % questions.length;
    saveQuizState(updatedState);

    navigate("/result", {
      state: {
        score: finalScore,
        totalQuestions: QUESTIONS_PER_STUDENT,
        studentNumber: quizState.currentStudent,
        completedStudents: updatedState.completedStudents,
      },
    });
  };

  // Previous button
  const goPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const globalIndex = quizState.questionIndex + currentQuestionIndex;
  const currentQuestion = questions[globalIndex % questions.length];

  const savedAnswer = answers[currentQuestionIndex];

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-background via-muted/30 to-background flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-2xl font-bold mb-4">
          Student #{quizState.currentStudent}
        </h2>

        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={QUESTIONS_PER_STUDENT} 
        />

        <QuestionCard
          question={currentQuestion}
          savedAnswer={savedAnswer}
          onAnswer={handleAnswer}
        />

        <div className="flex justify-between mt-6">
          <button
            onClick={goPrev}
            disabled={currentQuestionIndex === 0}
            className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>

          <button
            onClick={goNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
