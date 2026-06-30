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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 p-6">

      <div className="flex justify-between items-start gap-4">

        <div className="flex-1">

          <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
            {question.titre}
          </h2>

          <p className="text-gray-600 mt-3 leading-7">
            {question.description}
          </p>

        </div>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          {question.tag}
        </span>

      </div>

      <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500">

        <span className="font-medium">
          👍 {question.vote || 0} vote(s)
        </span>

        <span>
          💬 {nombreReponses} réponse(s)
        </span>

        <span>
          👤 {auteur}
        </span>

        <span>
          📅 {date}
        </span>

      </div>

      <div className="mt-6">

        <Link
          to={`/detail/${question._id}`}
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          Voir le détail →
        </Link>

      </div>

    </div>
  );
};

export default QuestionCard;