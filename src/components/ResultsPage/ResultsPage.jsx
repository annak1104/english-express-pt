import React from "react";

import telegram from "../../assets/telegram.svg";

const ResultsPage = ({ answers }) => {
  if (!answers || answers.length === 0) {
    return (
      <p className="text-center text-gray-700">
        No results available. Please complete the quiz.
      </p>
    );
  }

  const userLevel = answers[0]?.title || "Beginner";

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Seu plano English Express: de {userLevel} para fluente em 30 dias!
      </h1>

      <div className="max-w-lg w-full flex flex-col gap-6">
        {/* Learning Plan */}
        <div className="bg-[#000080] text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Plano de estudos 📘</h2>
          <p>Cursos personalizados com base nas suas respostas no quiz.</p>
        </div>

        {/* Practice Methods */}
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Métodos de prática 🎯</h2>
          <p>Exercícios e conversas reais para treinar de forma eficaz.</p>
        </div>

        {/* Fast-Track */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Vocabulário e gramática na prática 🚀
          </h2>
          <p>Conteúdo voltado para situações reais do dia a dia.</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-teal-500 text-white font-bold text-lg py-4 px-6 rounded-full hover:bg-teal-600 transition active:scale-95">
        Comece a aprender e ganhar agora mesmo!
      </button>

      {/* Telegram Info */}
      <div className="mt-6 flex flex-col items-center">
        <img src={telegram} className="w-12 h-12 mb-2" alt="Telegram Logo" />
        <p className="text-gray-700 text-center">
          Você precisa ter o Telegram instalado para aproveitar nosso app.
        </p>
      </div>
    </div>
  );
};

export default ResultsPage;
