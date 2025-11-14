export interface QuizState {
  currentStudent: number;
  questionIndex: number;
  completedStudents: number;
  studentScores: { studentNumber: number; score: number; totalQuestions: number }[];
}

const STORAGE_KEY = 'quiz_state';

export const getQuizState = (): QuizState => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
  
  return {
    currentStudent: 1,
    questionIndex: 0,
    completedStudents: 0,
    studentScores: [],
  };
};

export const saveQuizState = (state: QuizState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const resetQuizState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error resetting localStorage:', error);
  }
};

export const addStudentScore = (studentNumber: number, score: number, totalQuestions: number): void => {
  const state = getQuizState();
  state.studentScores.push({ studentNumber, score, totalQuestions });
  state.completedStudents += 1;
  saveQuizState(state);
};

export const advanceToNextStudent = (): void => {
  const state = getQuizState();
  state.currentStudent += 1;
  saveQuizState(state);
};
