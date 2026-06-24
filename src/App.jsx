import React from "react";
import Connexion from "./app/pages/Connexion";
import Inscription from "./app/pages/Inscription";
import UserLayout from "./app/layout/UserLayout";
import Accueil from "./app/pages/Accueil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profil from "./app/pages/Profil";
import Detail from "./app/pages/Detail";
import QuestionForm from "./app/pages/QuestionForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { path: "/", element: <Accueil /> },
        { path: "/connexion", element: <Connexion /> },
        { path: "/inscription", element: <Inscription /> },
        { path: "/profil", element: <Profil /> },
        { path: "/ajouter_question", element: <QuestionForm /> },

        // détail d'une question
        { path: "/detail/:id", element: <Detail /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;