import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [question, setQuestion] = useState(null);
  const [texte, setTexte] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    recupererQuestion();
  }, []);

  const recupererQuestion = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/question/${id}`
      );

      const data = await response.json();

      if (response.ok) {
        setQuestion(data.question);
      }

    } catch (error) {
      console.log(error);
    }
  };

  const envoyerReponse = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(
        `http://localhost:3000/api/reponse/${id}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            texte,
          }),
        }
      );

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        setTexte("");
        recupererQuestion();
      }

    } catch (error) {
      console.log(error);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-blue-600">
          Chargement...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-5xl mx-auto px-5">

        {/* Question */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="flex justify-between items-center">

            <h1 className="text-3xl font-bold text-gray-800">
              {question.titre}
            </h1>

            <span className="bg-blue-600 text-white px-4 py-2 rounded-full">
              {question.tag}
            </span>

          </div>

          <p className="text-gray-600 mt-6 leading-8">
            {question.description}
          </p>

          <div className="mt-8 border-t pt-5 flex justify-between text-gray-500">

            <span>
              👤 {question.auteur?.prenom} {question.auteur?.nom}
            </span>

            <span>
              👍 {question.vote || 0} vote(s)
            </span>

          </div>

        </div>

        {/* Réponses */}

        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Réponses
          </h2>

          {question.reponse?.length === 0 ? (

            <div className="text-center text-gray-500 py-8">
              Aucune réponse pour le moment.
            </div>

          ) : (

            question.reponse?.map((rep) => (

              <div
                key={rep._id}
                className="border rounded-xl p-5 mb-5 hover:bg-gray-50"
              >

                <p className="text-gray-700 leading-7">
                  {rep.texte}
                </p>

                <div className="mt-4 text-sm text-gray-500">
                  👤 {rep.user?.prenom} {rep.user?.nom}
                </div>

              </div>

            ))

          )}

        </div>

        {/* Formulaire */}

        <div className="bg-white rounded-2xl shadow-lg mt-8 p-8">

          <h2 className="text-2xl font-bold mb-5">
            Ajouter une réponse
          </h2>

          <form onSubmit={envoyerReponse}>

            <textarea
              rows="6"
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              placeholder="Écrivez votre réponse..."
              className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Publier la réponse
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Detail;