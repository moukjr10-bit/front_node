import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const auteur = question.auteur
    ? `${question.auteur.prenom} ${question.auteur.nom}`
    : "Auteur inconnu";

  const date = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString("fr-FR")
    : "";

  const nombreReponses = question.reponse
    ? question.reponse.length
    : 0;

  return (
    <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold">
            {question.titre}
          </h2>

          <p className="text-gray-600 mt-2">
            {question.description}
          </p>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {question.tag}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 mt-5 pt-3 border-t text-sm text-gray-500">
        <span>▲ {question.vote || 0} vote(s)</span>
        <span>💬 {nombreReponses} réponse(s)</span>
        <span>Par : {auteur}</span>
        <span>{date}</span>
      </div>

      <Link
        to={`/detail/${question._id}`}
        className="inline-block mt-4 text-blue-600 font-bold hover:underline"
      >
        Voir le détail →
      </Link>
    </div>
  );
};

export default QuestionCard;