import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";
import { questions } from "@/data/questions";
import { getQuizState, saveQuizState, addStudentScore, advanceToNextStudent } from "@/utils/localStorageUtils";

const QUESTIONS_PER_STUDENT = 10;

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizState, setQuizState] = useState(getQuizState());

  useEffect(() => {
    const state = getQuizState();
    setQuizState(state);

    if (state.questionIndex >= questions.length) {
      state.questionIndex = 0;
      saveQuizState(state);
      setQuizState(state);
    }
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex >= QUESTIONS_PER_STUDENT) {
      const finalScore = isCorrect ? score + 1 : score;
      
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
          completedStudents: updatedState.completedStudents
        } 
      });
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const currentGlobalIndex = quizState.questionIndex + currentQuestionIndex;
  const currentQuestion = questions[currentGlobalIndex % questions.length];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Student #{quizState.currentStudent}
          </h2>
        </div>

        <ProgressBar current={currentQuestionIndex + 1} total={QUESTIONS_PER_STUDENT} />
        
        <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />
      </div>
    </div>
  );
};

export default Quiz;
