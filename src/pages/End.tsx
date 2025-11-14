// src/pages/End.tsx
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const End = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalStudents, totalQuestions } = location.state || {};

  const handleRestart = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-8">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Quiz Completed!</h1>
        <p className="text-lg mb-2">All {totalQuestions} questions are done.</p>
        <p className="text-lg mb-8">Total Students Participated: {totalStudents}</p>
        <Button
          onClick={handleRestart}
          className="bg-white text-indigo-600 font-semibold px-10 py-4 rounded-xl hover:bg-indigo-50"
        >
          Restart Quiz
        </Button>
      </div>
    </div>
  );
};

export default End;
