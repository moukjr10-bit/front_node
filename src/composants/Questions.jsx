import React from "react";
import QuestionCard from "./QuestionCard";
const Questions = () => {
  const questions = [
    {
      id: 1,
      titre: "Comment utiliser useEffect dans React pour récupérer des données ?",
      description:
        "Je souhaite comprendre comment appeler une API et afficher les données dans mon composant React.",
      heure: "08:45",
      auteur: "Moussa Kanté",
    },

    {
      id: 2,
      titre: "Pourquoi mon serveur Express retourne une erreur 404 ?",
      description:
        "Toutes mes routes semblent correctes mais certaines requêtes ne fonctionnent toujours pas.",
      heure: "10:10",
      auteur: "Awa Ndiaye",
    },

    {
      id: 3,
      titre: "Comment connecter Spring Boot à une base de données MySQL ?",
      description:
        "Je cherche à configurer correctement la connexion entre Spring Boot et MySQL.",
      heure: "11:35",
      auteur: "Ibrahima Fall",
    },

    {
      id: 4,
      titre: "Quelle est la différence entre let, const et var en JavaScript ?",
      description:
        "Je veux mieux comprendre quand utiliser chaque déclaration dans mes projets JavaScript.",
      heure: "14:55",
      auteur: "Fatou Diop",
    },

    {
      id: 5,
      titre: "Comment créer une authentification JWT avec Node.js ?",
      description:
        "Je développe une API Express et je souhaite protéger les accès utilisateurs avec JWT.",
      heure: "17:20",
      auteur: "Cheikh Sow",
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