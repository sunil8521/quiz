export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  // Science Questions (1-40)
  
  { id: 1, question: "ପୃଥିବୀର ବୃହତ୍ତମ ମହାସାଗର କିଏ ?", options: ["ଆରବସାଗର", "ଅଟଲାଣ୍ଟିକ ସାଗର", "ପ୍ରଶାନ୍ତ ମହାସାଗର", "ଆଣ୍ଟ।ରଟିକା ମହାସାଗର"], correctAnswer: 0 },
  { id: 2, question: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: 1 },
  { id: 3, question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"], correctAnswer: 0 },
  { id: 4, question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correctAnswer: 2 },
  { id: 5, question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: 2 },
  { id: 6, question: "How many bones are in the human body?", options: ["206", "186", "226", "246"], correctAnswer: 0 },
  { id: 7, question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Brain"], correctAnswer: 2 },
  { id: 8, question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"], correctAnswer: 1 },
  { id: 9, question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Tissue"], correctAnswer: 2 },
  { id: 10, question: "What force keeps planets in orbit?", options: ["Magnetism", "Gravity", "Friction", "Nuclear force"], correctAnswer: 1 },
 
 
];
