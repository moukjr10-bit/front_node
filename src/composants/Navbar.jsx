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
    <nav
      className="
      w-full
      h-[10vh]
      flex
      items-center
      justify-between
      px-6
      md:px-12
      bg-gradient-to-r
      from-slate-900
      via-blue-900
      to-slate-900
      shadow-xl
      sticky
      top-0
      z-50
    "
    >

      {/* Logo */}
      <NavLink
        to="/"
        className="
          text-3xl
          font-extrabold
          text-transparent
          bg-gradient-to-r
          from-cyan-400
          to-blue-400
          bg-clip-text
          hover:scale-105
          transition
        "
      >
        KANTE-DEV
      </NavLink>

      {/* Centre */}
      <div className="flex items-center gap-10">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            font-semibold
            transition
            hover:text-cyan-300
            ${isActive ? "text-cyan-400" : "text-white"}
          `
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/profil"
          className={({ isActive }) =>
            `
            font-semibold
            transition
            hover:text-cyan-300
            ${isActive ? "text-cyan-400" : "text-white"}
          `
          }
        >
          Profil
        </NavLink>

      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">

        {
          token ? (
            <button
              onClick={Deconnexion}
              className="
                bg-red-500
                hover:bg-red-600
                text-white
                px-5
                py-2
                rounded-xl
                font-bold
                shadow-md
                hover:scale-105
                transition
              "
            >
              Déconnexion
            </button>
          ) : (
            <>
              <NavLink
                to="/connexion"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-5
                  py-2
                  rounded-xl
                  font-bold
                  shadow-md
                  transition
                  hover:scale-105
                "
              >
                Connexion
              </NavLink>

              <NavLink
                to="/inscription"
                className="
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-5
                  py-2
                  rounded-xl
                  font-bold
                  shadow-md
                  transition
                  hover:scale-105
                "
              >
                Inscription
              </NavLink>
            </>
          )
        }

      </div>

    </nav>
  )
}

export default Navbar