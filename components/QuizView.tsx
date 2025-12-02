import React, { useState, useEffect } from 'react';
import { DATA } from '../constants';
import { VocabItem, QuizQuestion } from '../types';

const QuizView: React.FC = () => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    startQuiz();
  }, []);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  };

  const startQuiz = () => {
    const allVocab: VocabItem[] = [];
    Object.values(DATA).forEach(cat => allVocab.push(...cat.items));
    
    const shuffledVocab = shuffleArray(allVocab);
    const quizItems = shuffledVocab.slice(0, 10);

    const generatedQuestions = quizItems.map(item => {
      // 50% chance for Context Question if data available
      if (Math.random() < 0.5 && item.fraseIt && item.fraseEs) {
        const correctPhrase = item.fraseEs;
        const pool = allVocab.filter(v => v.fraseEs !== correctPhrase);
        const distractors = shuffleArray(pool)
          .slice(0, 2)
          .map(v => v.fraseEs || "Contexto desconocido");
        
        return {
          question: `Si alguien dice: "${item.fraseIt}", ¿cuál es el significado más cercano?`,
          correctAnswer: correctPhrase,
          options: shuffleArray([correctPhrase, ...distractors])
        };
      } else {
        // Simple translation
        const correct = item.es;
        const pool = allVocab.filter(v => v.es !== correct);
        const distractors = shuffleArray(pool)
          .slice(0, 2)
          .map(v => v.es);

        return {
          question: `Traduce la palabra: "${item.it}"`,
          correctAnswer: correct,
          options: shuffleArray([correct, ...distractors])
        };
      }
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setQuizFinished(false);
    setQuestionAnswered(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (option: string) => {
    if (questionAnswered) return;

    setQuestionAnswered(true);
    setSelectedOption(option);
    
    const isCorrect = option === questions[currentIndex].correctAnswer;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setQuestionAnswered(false);
        setSelectedOption(null);
      } else {
        setQuizFinished(true);
      }
    }, 1500);
  };

  if (questions.length === 0) return <div>Cargando test...</div>;

  if (quizFinished) {
    const percentage = (score / questions.length) * 100;
    let feedback = '';
    if (percentage >= 80) feedback = '¡Bravissimo! Tienes un excelente dominio del vocabulario.';
    else if (percentage >= 50) feedback = '¡Bene! Estás en el camino correcto.';
    else feedback = 'Sigue practicando, pronto lo lograrás.';

    return (
      <section className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg border-t-4 border-[#008C45]">
        <div className="text-center p-6">
          <h3 className="text-3xl font-bold text-[#008C45] mb-4">Test Completado</h3>
          <p className="text-2xl mb-4">Tu puntuación final es:</p>
          <p className="text-6xl font-extrabold text-[#CD212A]">{score}/{questions.length}</p>
          <p className="text-lg text-gray-700 mt-2">({percentage.toFixed(0)}%)</p>
          <p className="mt-6 text-xl text-gray-800 font-medium">{feedback}</p>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-[#008C45] mb-4">¡Lleva tu italiano al siguiente nivel!</h4>
            <a href="https://go.hotmart.com/U103170151V" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#CD212A] text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:bg-[#A51A22] transition-colors text-xl">
              📚 Iniciar Curso Digital
            </a>
          </div>
          
          <button 
            onClick={startQuiz} 
            className="mt-4 bg-gray-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 transition-colors"
          >
            Reiniciar Test
          </button>
        </div>
      </section>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <section className="max-w-2xl mx-auto p-4 bg-white rounded-xl shadow-lg border-t-4 border-[#008C45]">
      <h2 className="text-3xl font-bold text-[#008C45] mb-4 text-center">🧠 Test de Vocabulario</h2>
      <div>
        <p className="text-lg font-bold mb-4">Pregunta {currentIndex + 1} de {questions.length}</p>
        <p className="text-xl mb-6 font-semibold text-[#008C45]">{currentQ.question}</p>
        <div className="flex flex-col space-y-3">
          {currentQ.options.map((option, index) => {
            let btnClass = "w-full text-left p-3 mb-3 bg-white rounded-lg cursor-pointer transition-colors duration-200 shadow-sm hover:bg-gray-100 border-2 border-gray-100";
            
            if (questionAnswered) {
              if (option === currentQ.correctAnswer) {
                btnClass = "w-full text-left p-3 mb-3 rounded-lg border-2 shadow-lg bg-green-100 border-[#008C45]";
              } else if (option === selectedOption) {
                btnClass = "w-full text-left p-3 mb-3 rounded-lg border-2 shadow-lg bg-red-100 border-[#CD212A]";
              } else {
                btnClass = "w-full text-left p-3 mb-3 bg-gray-50 rounded-lg border-2 border-gray-100 opacity-50";
              }
            }

            return (
              <button 
                key={index}
                className={btnClass}
                onClick={() => handleOptionClick(option)}
                disabled={questionAnswered}
              >
                {option}
              </button>
            );
          })}
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm font-semibold text-gray-600">
            {questionAnswered 
              ? `Puntuación: ${score} (${selectedOption === currentQ.correctAnswer ? '¡Correcto!' : 'Incorrecto'})`
              : `Puntuación actual: ${score}`
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizView;