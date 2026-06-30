import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import UserLayout from "./app/layout/UserLayout";

import Accueil from "./app/pages/Accueil";
import Connexion from "./app/pages/Connexion";
import Inscription from "./app/pages/Inscription";
import Profil from "./app/pages/Profil";
import QuestionForm from "./app/pages/QuestionForm";
import Detail from "./app/pages/Detail";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          path: "/",
          element: <Accueil />,
        },

        {
          path: "/connexion",
          element: <Connexion />,
        },

        {
          path: "/inscription",
          element: <Inscription />,
        },

        {
          path: "/profil",
          element: <Profil />,
        },

        {
          path: "/ajouter_question",
          element: <QuestionForm />,
        },

        // DETAIL DE LA QUESTION
        {
          path: "/detail/:id",
          element: <Detail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;