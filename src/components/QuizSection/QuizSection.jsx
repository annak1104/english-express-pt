import { AnimatePresence, motion } from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

import logoDark from "../../assets/logo-dark.svg";
import logo from "../../assets/logo.svg";
import referral from "../../assets/referral.png";
import telegram from "../../assets/telegram.svg";
import FinalThankYouPage from "../../components/FinalThankYouPage/FinalThankYouPage";
import MLMEarningsSimulator from "../../components/MLMEarningsSimulator/MLMEarningsSimulator";
import ResultsPage from "../../components/ResultsPage/ResultsPage";

// Questions for the quiz
const questions = [
  {
    question: "Como você avalia seu nível de inglês?",
    options: [
      {
        title: "Iniciante",
        description: "Tenho dificuldade em manter conversas.",
      },
      {
        title: "Intermediário",
        description: "Consigo lidar com situações do dia a dia.",
      },
      {
        title: "Avançado",
        description: "Quero aperfeiçoar minhas habilidades.",
      },
    ],
  },
  {
    question: "Qual é sua forma favorita de aprender?",
    options: [
      {
        title: "Assistindo a vídeos",
        description:
          "Aprendo melhor com conteúdos visuais e materiais envolventes.",
      },
      {
        title: "Exercícios interativos",
        description:
          "Gosto de atividades práticas que me mantêm participando ativamente.",
      },
      {
        title: "Conversando com falantes nativos",
        description:
          "Prefiro conversas reais para melhorar a fluência e ganhar confiança.",
      },
    ],
  },
  {
    question: "Quanto tempo por semana você pode dedicar ao inglês?",
    options: [
      {
        title: "1 a 2 horas",
        description: "Consigo separar um tempinho por semana para estudar.",
      },
      {
        title: "3 a 5 horas",
        description: "Tenho disponibilidade para praticar com regularidade.",
      },
      {
        title: "6+ horas",
        description:
          "Estou totalmente comprometido com uma rotina intensiva de estudos.",
      },
    ],
  },
  {
    question:
      "Você teria interesse em ganhar dinheiro convidando amigos para aprender com você?",
    options: [
      {
        title: "Sim!",
        description: "Adoraria ganhar enquanto melhoro meu inglês.",
      },
      { title: "Talvez", description: "Se for fácil, quem sabe." },
      { title: "Não", description: "Estou aqui só pra aprender mesmo." },
    ],
  },
  {
    question: "Você costuma indicar apps ou cursos para amigos?",
    options: [
      {
        title: "Sim",
        description: "Adoro compartilhar o que funciona pra mim!",
      },
      { title: "Às vezes", description: "Quando acho algo realmente útil." },
      {
        title: "Não muito",
        description: "Prefiro aprender por conta própria.",
      },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleAnswer = (answer) => {
    // Save the answer and move to the next question
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is completed, show results page
      setQuizCompleted(true);
    }
  };

  // Scroll to the top of the results page when the quiz is completed
  useEffect(() => {
    if (quizCompleted) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [quizCompleted]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div>
      {/* Show results, MLM earnings simulator, and thank you page after quiz completion */}
      {quizCompleted ? (
        <div ref={resultsRef}>
          {" "}
          {/* Attach ref to the results container */}
          <ResultsPage answers={answers} />
          <MLMEarningsSimulator />
          <FinalThankYouPage />
        </div>
      ) : (
        <>
          {!quizStarted && (
            <section className="relative h-screen bg-cover bg-center bg-[url('./assets/eng.png')]">
              {/* <div className="absolute inset-0 backdrop-blur-xs"></div> */}
              <div className="relative flex flex-col items-center justify-center h-full text-[#34495E] px-6">
                <div className="w-[60%]">
                  <img src={logo} alt="Main-logo" />
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-center text-[#2C3E50]"
                >
                  Seu inglês pode impulsionar sua carreira — e você ainda pode
                  ganhar enquanto aprende!
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-open-sans text-lg mb-8 text-center text-[#03846b]"
                >
                  Responda este quiz rápido para receber um plano de aprendizado
                  personalizado e descobrir como ganhar dinheiro enquanto domina
                  o inglês!
                </motion.p>
                <motion.button
                  onClick={startQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1ABC9C] text-white font-montserrat text-lg font-bold py-4 px-8 rounded-full transition-all duration-300 ease-in-out"
                >
                  Começar o quiz!
                </motion.button>
              </div>
            </section>
          )}

          {/* MLM Info Section */}
          {!quizStarted && (
            <section className="bg-[#ECF0F1] p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <h2 className="font-montserrat text-3xl font-bold text-[#2C3E50] mb-6">
                  Learn & Earn
                </h2>
                <p className="font-lato text-[#34495E] text-lg mb-6">
                  Refer friends & earn commissions while you improve your
                  English!
                </p>
                {/* Referral Tree Illustration */}
                <div className="flex justify-center">
                  <img
                    src={referral}
                    alt="Referral Network"
                    className="w-1/2"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Telegram Info Section */}
          {!quizStarted && (
            <section className="bg-white p-6">
              <div className="max-w-screen-md mx-auto text-center">
                <img
                  src={telegram}
                  className="w-12 h-12 m-auto"
                  alt="Telegram Logo"
                />
                <h2 className="font-montserrat text-3xl font-bold text-[#2C3E50] mb-4">
                  Você vai precisar do Telegram
                </h2>
                <p className="font-lato text-[#34495E] text-lg mb-6">
                  Receba atualizações de aulas em tempo real, aprenda com a IA,
                  e comece a ganhar através de indicações!
                </p>
                <button className="bg-[#1ABC9C] text-white font-montserrat font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:bg-[#16A085] active:scale-95">
                  Baixar o Telegram
                </button>
              </div>
            </section>
          )}

          {/* Quiz Section */}
          {quizStarted && (
            <div ref={quizRef} className="pt-16 h-screen pb-10">
              <div className="w-[60%] m-auto">
                <img src={logoDark} alt="Main-logo" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center justify-center bg-white px-6"
              >
                <p className="text-lg font-semibold text-gray-700 mt-9 mb-2">
                  Etapa {currentQuestion + 1} de {questions.length}
                </p>
                <div className="w-full bg-gray-300 h-2 mb-8 mt-8">
                  <motion.div
                    initial={{
                      width: `${(currentQuestion / questions.length) * 100}%`,
                    }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1ABC9C] h-2"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  {questions[currentQuestion].question}
                </h2>

                <AnimatePresence mode="sync">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full flex flex-col text-left bg-white text-gray-800 font-bold p-4 rounded-lg mb-4 shadow-md transition-all hover:border-green-500 hover:shadow-lg"
                    >
                      <span className="text-lg font-bold">{option.title}</span>
                      <span className="text-sm text-gray-400">
                        {option.description}
                      </span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default QuizSection;
