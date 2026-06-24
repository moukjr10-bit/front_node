import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState("");
  const [message, setMessage] = useState("");

  // Récupérer la question avec ses réponses
  const recupererQuestion = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/question/${id}`
      );

      const result = await response.json();

      if (response.ok) {
        setQuestion(result.question);
      } else {
        setErreur(result.message || "Question introuvable");
      }
    } catch (error) {
      console.log(error);
      setErreur("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    recupererQuestion();
  }, [id]);

  // Publier une réponse
  const AjouterReponse = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Veuillez vous connecter pour ajouter une réponse.");
      navigate("/connexion");
      return;
    }

    if (!text.trim()) {
      setMessage("Veuillez écrire votre réponse.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/question/${id}/reponse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            text: text
          })
        }
      );

      const result = await response.json();

      if (response.ok) {
        setQuestion(result.question);
        setText("");
        setMessage("Réponse ajoutée avec succès.");
      } else {
        setMessage(result.message || "Impossible d'ajouter la réponse.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Erreur serveur. Veuillez réessayer.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="font-bold text-slate-600">
          Chargement de la question...
        </p>
      </div>
    );
  }

  if (erreur) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-5">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Erreur
          </h1>

          <p className="mt-3 text-slate-600">{erreur}</p>

          <Link
            to="/"
            className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 font-bold hover:underline"
        >
          ← Retour aux questions
        </Link>

        {/* QUESTION */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <div className="flex justify-between items-center flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
              {question.tag}
            </span>

            <span className="text-sm text-slate-500">
              {new Date(question.createdAt).toLocaleDateString("fr-FR")}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mt-5 text-slate-900">
            {question.titre}
          </h1>

          <p className="text-slate-600 mt-4 leading-7">
            {question.description}
          </p>

          <div className="border-t mt-6 pt-4 flex justify-between items-center flex-wrap gap-3">
            <p className="text-slate-500">
              Question posée par :
              <span className="font-bold text-slate-800 ml-1">
                {question.auteur?.prenom} {question.auteur?.nom}
              </span>
            </p>

            <span className="text-sm text-slate-500">
              Votes : {question.vote || 0}
            </span>
          </div>
        </div>

        {/* LISTE DES RÉPONSES */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-7">
          <h2 className="text-2xl font-bold">
            Réponses ({question.reponse?.length || 0})
          </h2>

          {question.reponse && question.reponse.length > 0 ? (
            <div className="mt-5 space-y-4">
              {question.reponse.map((reponse, index) => (
                <div
                  key={reponse._id || index}
                  className="border border-slate-200 rounded-xl p-4 bg-slate-50"
                >
                  <p className="text-slate-700">
                    {reponse.text}
                  </p>

                  <p className="text-sm text-slate-500 mt-3">
                    Réponse de :
                    <span className="font-bold ml-1">
                      {reponse.user?.prenom} {reponse.user?.nom}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 mt-4">
              Il n'y a pas encore de réponse à cette question.
            </p>
          )}
        </div>

        {/* FORMULAIRE RÉPONSE */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mt-7">
          <h2 className="text-xl font-bold">
            Ajouter une réponse
          </h2>

          <form onSubmit={AjouterReponse} className="mt-4">
            <textarea
              className="w-full min-h-36 border border-slate-300 rounded-lg p-4 outline-none focus:border-blue-500"
              placeholder="Écrivez votre réponse ici..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            {message && (
              <p className="mt-3 text-sm text-blue-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
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