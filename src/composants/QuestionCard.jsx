import { Link } from "react-router-dom";

const QuestionCard = ({ question }) => {
  const auteur =
    question.auteur?.prenom && question.auteur?.nom
      ? `${question.auteur.prenom} ${question.auteur.nom}`
      : "Utilisateur inconnu";

  const date = question.createdAt
    ? new Date(question.createdAt).toLocaleDateString("fr-FR")
    : "";

  const nombreReponses = question.reponse
    ? question.reponse.length
    : 0;

  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-sm bg-white hover:shadow-md transition">
      <div className="flex flex-col md:flex-row gap-5">

        <div className="flex md:flex-col gap-4 text-sm text-gray-600 md:min-w-24">
          <span>
            <strong className="text-gray-900">
              {question.vote || 0}
            </strong>{" "}
            votes
          </span>

          <span>
            <strong className="text-gray-900">
              {nombreReponses}
            </strong>{" "}
            réponses
          </span>
        </div>

        <div className="flex-1">
          <Link
            to={`/question/${question._id}`}
            className="text-xl font-semibold text-blue-600 hover:underline"
          >
            {question.titre}
          </Link>

          <p className="text-gray-600 mt-2">
            {question.description}
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4">
            <div>
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium">
                {question.tag}
              </span>
            </div>

            <div className="text-sm text-gray-500">
              Posée par{" "}
              <span className="font-semibold text-gray-700">
                {auteur}
              </span>{" "}
              le {date}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuestionCard;