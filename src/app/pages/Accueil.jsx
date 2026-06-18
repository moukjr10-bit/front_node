import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Questions from './../../composants/Questions';

const Accueil = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const VerificationToken = () => {
        if (token) {
            return navigate('/ajouter_question');
        }

        navigate('/connexion');
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100">

            {/* Header */}
            <div className="
                w-full
                h-[15vh]
                flex
                items-center
                justify-between
                px-8
                md:px-16
                bg-white
                shadow-md
            ">

                <h1 className="
                    text-3xl
                    font-extrabold
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    bg-clip-text
                    text-transparent
                ">
                    Questions & Réponses
                </h1>

                <NavLink
                    onClick={() => VerificationToken()}
                    className="
                        bg-gradient-to-r
                        from-green-500
                        to-emerald-600
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        shadow-lg
                        hover:scale-105
                        hover:shadow-xl
                        transition
                        duration-300
                    "
                >
                    + Ajouter question
                </NavLink>

            </div>

            {/* Contenu */}
            <div className="max-w-6xl mx-auto px-5 py-10">

                <div className="
                    bg-white
                    rounded-3xl
                    shadow-xl
                    p-6
                ">
                    <Questions />
                </div>

            </div>

        </div>
    )
}

export default Accueil