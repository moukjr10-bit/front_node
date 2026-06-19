import React, {
 useEffect,
 useState
} from "react";

import QuestionCard from "./QuestionCard";

const URL =
 import.meta.env.VITE_URL_BACK;

const Questions = () => {

 const [questions, setQuestions] =
  useState([]);

 const [loading, setLoading] =
  useState(true);

 useEffect(() => {

   const chargerQuestions =
   async () => {

     try {

       const response =
       await fetch(
        `${URL}/api/question`
       );

       const data =
       await response.json();

       setQuestions(data);

     } catch (error) {

       console.log(error);

     } finally {

       setLoading(false);

     }

   };

   chargerQuestions();

 }, []);

 if (loading) {
   return (
     <h1>
       Chargement...
     </h1>
   );
 }

 return (
   <div className="w-full p-10">

     <h1 className="text-3xl font-bold mb-6">
       Les questions
     </h1>

     <div className="space-y-4">

       {
        questions.map(
         (question) => (

          <QuestionCard
            key={question._id}
            question={{
              ...question,
              auteur:
                question.auteur
                  ? `${question.auteur.prenom} ${question.auteur.nom}`
                  : "Inconnu"
            }}
          />

         )
        )
       }

     </div>

   </div>
 );

};

export default Questions;