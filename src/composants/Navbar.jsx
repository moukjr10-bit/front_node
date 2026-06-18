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

      {/* Gauche */}
      <NavLink
        to="/"
        className="text-white font-bold text-xl"
      >
        KANTE-DEV
      </NavLink>

      {/* Milieu */}
      <div className="flex items-center gap-10">

        <NavLink
          to="/"
          className="text-white font-semibold"
        >
          Accueil
        </NavLink>

        <NavLink
          to="/profil"
          className="text-white font-semibold"
        >
          Profil
        </NavLink>

      </div>

      {/* Droite */}
      <div className="flex items-center gap-3">

        {
          token ? (
            <button
              onClick={Deconnexion}
              className="bg-red-600 text-white px-6 py-1 rounded font-bold hover:bg-red-700"
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <NavLink
                to="/connexion"
                className="bg-yellow-600 text-white px-6 py-1 rounded font-bold"
              >
                Connexion
              </NavLink>

              <NavLink
                to="/inscription"
                className="bg-green-600 text-white px-6 py-1 rounded font-bold"
              >
                Inscription
              </NavLink>
            </>
          )
        }

      </div>

    </div>
  )
}

export default Navbar