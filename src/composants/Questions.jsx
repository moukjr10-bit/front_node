import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState("");

  const recupererQuestions = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/question");
      const result = await response.json();

      if (response.ok) {
        setQuestions(result.questions);
      } else {
        setErreur(result.message || "Impossible de récupérer les questions");
      }
    } catch (error) {
      console.log(error);
      setErreur("Erreur de connexion avec le backend");
    } finally {
      setChargement(false);
    }
  };

  useEffect(() => {
    recupererQuestions();
  }, []);

  if (chargement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">
            Chargement des questions...
          </p>
        </div>
      </div>
    );
  }

  if (erreur) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          {erreur}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-5">

          <h1 className="text-4xl font-bold">
            Mini Stack Overflow
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Posez vos questions, partagez vos connaissances et trouvez des solutions.
          </p>

        </div>
      </div>

      {/* Liste des questions */}
      <div className="max-w-6xl mx-auto px-5 py-10">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Questions récentes
          </h2>

          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {questions.length} question(s)
          </span>

        </div>

        {questions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              Aucune question disponible
            </h3>

            <p className="text-gray-500 mt-2">
              Soyez le premier à publier une question.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {questions.map((question) => (
              <QuestionCard
                key={question._id}
                question={question}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Questions;