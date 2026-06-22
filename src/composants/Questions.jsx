import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const afficherQuestions = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/question"
        );

        const data = await response.json();

        if (response.ok) {
          setQuestions(data.questions);
        } else {
          console.log(data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    afficherQuestions();
  }, []);

  return (
    <div className="w-full p-10">
      <h1 className="text-3xl font-bold mb-6">
        Les questions
      </h1>

      <div className="space-y-4">
        {questions.length === 0 ? (
          <p className="text-gray-500">
            Aucune question disponible pour le moment.
          </p>
        ) : (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              question={question}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Questions;