import React from "react";
import QuestionCard from "./QuestionCard";


const Questions = () => {
  const questions = [
    {
      id: 1,
      titre: "Comment créer une connexion entre React et Node.js ?",
      description:
        "Je souhaite connecter mon frontend React avec mon backend Node.js et envoyer des données.",
      heure: "08:30",
      auteur: "Moussa Kanté",
    },

    {
      id: 2,
      titre: "Pourquoi mon API retourne une erreur CORS ?",
      description:
        "Mon frontend React ne parvient pas à communiquer avec mon backend Express.",
      heure: "10:15",
      auteur: "Awa Diop",
    },

    {
      id: 3,
      titre: "Comment utiliser MongoDB avec Express ?",
      description:
        "Je souhaite enregistrer des utilisateurs dans MongoDB avec Node.js.",
      heure: "11:20",
      auteur: "Ibrahima Fall",
    },

    {
      id: 4,
      titre: "Comment protéger une route avec JWT ?",
      description:
        "Je veux sécuriser certaines pages après connexion utilisateur.",
      heure: "14:00",
      auteur: "Fatou Mbaye",
    },

    {
      id: 5,
      titre: "Comment déployer une application MERN sur Render et Vercel ?",
      description:
        "Je veux mettre mon backend sur Render et mon frontend sur Vercel.",
      heure: "17:45",
      auteur: "Ousmane Ndiaye",
    },
  ];

  return (
    <div className="w-full p-10">
      <h1 className="text-3xl font-bold mb-6">Les questions</h1>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;