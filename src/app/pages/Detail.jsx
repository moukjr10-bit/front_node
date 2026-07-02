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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
        <h1 className="text-4xl font-bold text-blue-600 animate-pulse">
          Chargement...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-12">

      <div className="max-w-6xl mx-auto px-5">

        {/* Question */}

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-10">

          <div className="flex flex-col md:flex-row justify-between gap-5">

            <h1 className="text-4xl font-extrabold text-slate-800">
              {question.titre}
            </h1>

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg h-fit">
              {question.tag}
            </span>

          </div>

          <p className="text-gray-700 text-lg leading-9 mt-8">
            {question.description}
          </p>

          <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">

                {question.auteur?.prenom?.charAt(0)}

              </div>

              <div>

                <p className="font-bold text-gray-700">

                  {question.auteur?.prenom} {question.auteur?.nom}

                </p>

                <p className="text-sm text-gray-500">
                  Auteur de la question
                </p>

              </div>

            </div>

            <div className="mt-5 md:mt-0">

              <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
                👍 {question.vote || 0} vote(s)
              </span>

            </div>

          </div>

        </div>

        {/* Réponses */}

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 mt-10 p-10">

          <h2 className="text-3xl font-bold text-slate-700 mb-8">
             Réponses
          </h2>

          {question.reponse?.length === 0 ? (

            <div className="bg-slate-100 rounded-2xl py-12 text-center text-gray-500 text-lg">

              Aucune réponse pour le moment.

            </div>

          ) : (

            question.reponse?.map((rep) => (

              <div
                key={rep._id}
                className="bg-slate-50 border border-gray-200 rounded-2xl p-6 mb-6 hover:shadow-lg hover:border-blue-400 transition duration-300"
              >

                <p className="text-gray-700 text-lg leading-8">

                  {rep.texte}

                </p>

                <div className="mt-6 flex items-center gap-3">

                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">

                    {rep.user?.prenom?.charAt(0)}

                  </div>

                  <div>

                    <p className="font-semibold text-gray-700">

                      {rep.user?.prenom} {rep.user?.nom}

                    </p>

                    <p className="text-sm text-gray-500">
                      A répondu
                    </p>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

        {/* Formulaire */}

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 mt-10 p-10">

          <h2 className="text-3xl font-bold text-slate-700 mb-8">
             Ajouter une réponse
          </h2>

          <form onSubmit={envoyerReponse}>

            <textarea
              rows="7"
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              placeholder="Écrivez votre réponse..."
              className="w-full border-2 border-gray-200 rounded-2xl p-5 text-lg resize-none focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition"
            ></textarea>

            <button
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white text-lg font-bold py-4 rounded-2xl shadow-xl transition duration-300 hover:scale-[1.02]"
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