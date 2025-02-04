import { useState } from 'react';

function ChatGPTDecisionTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState('');

  const questions = [
    {
      text: "Är uppgiften relaterad till att skapa kreativt innehåll, brainstorma idéer eller ge förslag?",
      answers: ["Ja", "Nej"],
      evaluate: (answer) => {
        if (answer === "Ja") {
          return {
            result: "ChatGPT är ett bra val för uppgiften.",
            final: true
          };
        }
        return { final: false };
      }
    },
    {
      text: "Är uppgiften fokuserad på att ge specifik, korrekt information eller kräver den domänkunskap?",
      answers: ["Ja", "Nej"],
      evaluate: (answer) => {
        if (answer === "Ja") {
          return {
            result: "Använd en resurs som specialiserar sig på faktabaserad information eller domänkunskap.",
            final: true
          };
        }
        return { final: false };
      }
    },
    {
      text: "Behöver uppgiften realtidsinteraktiva svar?",
      answers: ["Ja", "Nej"],
      evaluate: (answer) => {
        if (answer === "Ja") {
          return {
            result: "ChatGPT är lämpligt för denna uppgift.",
            final: true
          };
        }
        return { final: false };
      }
    },
    {
      text: "Finns det några sekretess- eller säkerhetsproblem som måste beaktas?",
      answers: ["Ja", "Nej"],
      evaluate: (answer) => {
        if (answer === "Ja") {
          return {
            result: "Utvärdera noga om ChatGPT är lämpligt givet sekretesskraven.",
            final: true
          };
        }
        return { final: false };
      }
    },
    {
      text: "Kan uppgiften dra nytta av mänskligt omdöme eller intuition?",
      answers: ["Ja", "Nej"],
      evaluate: (answer) => {
        if (answer === "Ja") {
          return {
            result: "Kombinera mänskligt omdöme med ChatGPT för bästa resultat.",
            final: true
          };
        }
        return {
          result: "ChatGPT kan vara lämpligt för uppgiften.",
          final: true
        };
      }
    }
  ];

  const handleAnswer = (answer) => {
    const evaluation = questions[currentQuestion].evaluate(answer);
    
    if (evaluation.final) {
      setResult(evaluation.result);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const startOver = () => {
    setCurrentQuestion(0);
    setResult('');
  };

  return (
    <div className="mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white text-green-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full md:w-auto font-semibold"
      >
        Är ChatGPT lämpligt för uppgiften?
      </button>

      {isOpen && (
        <div className="mt-4 mx-auto max-w-2xl">
          <div className="bg-white p-6 rounded-lg shadow-md">
            {!result ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{questions[currentQuestion].text}</h3>
                <div className="flex justify-center space-x-8">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer)}
                      className={`px-8 py-2 rounded-lg transition-colors ${
                        answer === "Ja" 
                          ? "bg-green-600 hover:bg-green-700 text-white" 
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-gray-800">{result}</p>
                <div className="flex justify-center space-x-8">
                  <button
                    onClick={startOver}
                    className="bg-green-600 text-white px-8 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Börja om
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-red-600 text-white px-8 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Stäng
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatGPTDecisionTool; 