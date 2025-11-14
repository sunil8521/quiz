import { useLocation } from "react-router-dom";
import ResultScreen from "@/components/ResultScreen";

const Result = () => {
  const location = useLocation();
  const { score = 0, totalQuestions = 10, studentNumber = 1, completedStudents = 0 } = location.state || {};

  return (
    <ResultScreen
      score={score}
      totalQuestions={totalQuestions}
      studentNumber={studentNumber}
      completedStudents={completedStudents}
    />
  );
};

export default Result;
