import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuestionForm = () => {
  const navigate = useNavigate();

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const token = localStorage.getItem("token");

  const AjouterQuestion = async (e) => {
    e.preventDefault();

    if (!titre || !description || !tag) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          titre,
          description,
          tag,
        }),
      });

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        setTitre("");
        setDescription("");
        setTag("");

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Erreur de connexion avec le serveur.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl p-10">

          <h1 className="text-4xl font-bold text-blue-700 text-center">
            Poser une question
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Décrivez votre problème le plus précisément possible.
          </p>

          <form
            onSubmit={AjouterQuestion}
            className="mt-10 space-y-6"
          >

            <div>
              <label className="block font-semibold mb-2">
                Titre de la question
              </label>

              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Ex : Comment utiliser React Router ?"
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Description
              </label>

              <textarea
                rows="8"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Expliquez votre problème..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Tag
              </label>

              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="React, Node.js, MongoDB..."
                className="w-full border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 rounded-xl transition"
            >
              Publier la question
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default QuestionForm;