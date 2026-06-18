import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const Deconnexion = () => {
    localStorage.removeItem("token");
    alert('Déconnexion réussie');
    navigate('/');
  }

  return (
    <div className='w-full h-[10vh] flex items-center justify-between px-10 py-2 bg-neutral-400'>

      {/* Logo */}
      <NavLink
        to="/"
        className="text-xl font-bold text-white"
      >
        KANTE-DEV
      </NavLink>

      {/* Navigation */}
      <div className="flex items-center gap-5">

        {/* AJOUT ACCUEIL */}
        <NavLink
          to="/"
          className="text-white"
        >
          Accueil
        </NavLink>

        {/* PROFIL */}
        <NavLink
          to="/profil"
          className="text-white"
        >
          Profil
        </NavLink>

        {
          token ? (
            <button
              onClick={Deconnexion}
              className="bg-red-600 text-white px-6 py-1 rounded font-bold hover:bg-red-700"
            >
              Se déconnecter
            </button>
          ) : (
            <div className="flex items-center gap-2">

              <NavLink
                to="/connexion"
                className="bg-yellow-600 text-white px-6 py-1 rounded font-bold hover:bg-yellow-700"
              >
                Connexion
              </NavLink>

              <NavLink
                to="/inscription"
                className="bg-green-600 text-white px-6 py-1 rounded font-bold hover:bg-green-700"
              >
                Inscription
              </NavLink>

            </div>
          )
        }

      </div>

    </div>
  )
}

export default Navbar