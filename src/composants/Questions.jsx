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
      <div className="w-full p-10 text-center text-gray-500">
        Chargement des questions...
      </div>
    );
  }

  if (erreur) {
    return (
      <div className="w-full p-10 text-center text-red-600">
        {erreur}
      </div>
    );
  }

  return (
    <div className="w-full p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">Les questions</h1>

      {questions.length === 0 ? (
        <p className="text-gray-500">
          Aucune question disponible pour le moment.
        </p>
      ) : (
        <div className="space-y-4">
          {questions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Questions;