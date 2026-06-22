import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState(null);
  const [erreur, setErreur] = useState("");

  useEffect(() => {
    const recupererQuestion = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/question/${id}`
        );

        const data = await response.json();

        if (response.ok) {
          setQuestion(data.question);
        } else {
          setErreur(data.message || "Question introuvable");
        }
      } catch (error) {
        console.log(error);
        setErreur("Erreur de connexion au serveur");
      }
    };

    recupererQuestion();
  }, [id]);

  if (erreur) {
    return (
      <div className="p-10 text-center text-red-500">
        {erreur}
      </div>
    );
  }

  if (!question) {
    return (
      <div className="p-10 text-center text-gray-500">
        Chargement...
      </div>
    );
  }

  const auteur =
    question.auteur?.prenom && question.auteur?.nom
      ? `${question.auteur.prenom} ${question.auteur.nom}`
      : "Utilisateur inconnu";

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-bold">
          {question.titre}
        </h1>

        <p className="text-gray-700 mt-4">
          {question.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md">
            {question.tag}
          </span>

          <span className="text-sm text-gray-500">
            Posée par {auteur}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">
          Réponses ({question.reponse?.length || 0})
        </h2>

        {question.reponse?.length === 0 ? (
          <div className="bg-white border rounded-lg p-5 text-gray-500">
            Aucune réponse pour le moment.
          </div>
        ) : (
          question.reponse.map((reponse, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-4 mb-3"
            >
              <p className="text-gray-700">
                {reponse.text}
              </p>

              <p className="text-sm text-gray-500 mt-3">
                Réponse de{" "}
                {reponse.user?.prenom} {reponse.user?.nom}
              </p>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Detail;