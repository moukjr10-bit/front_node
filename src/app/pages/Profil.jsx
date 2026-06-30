import React, { useEffect, useState } from "react";

const Profil = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    recupererProfil();

  }, []);

  const recupererProfil = async () => {

    const token = localStorage.getItem("token");

    try {

      const response = await fetch(
        "http://localhost:3000/api/auth/profil",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();

      if (response.ok) {

        setUser(data);

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.log(error);

    }

  };

  if (!user) {

    return (

      <div className="flex justify-center mt-20">

        Chargement...

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-slate-100 py-10">

      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <div className="flex justify-center">

          <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">

            {user.prenom.charAt(0)}

          </div>

        </div>

        <h2 className="text-center text-3xl font-bold mt-4">

          Mon Profil

        </h2>

        <div className="mt-8 space-y-4">

          <div>

            <p className="text-gray-500">

              Prénom

            </p>

            <p className="font-bold">

              {user.prenom}

            </p>

          </div>

          <div>

            <p className="text-gray-500">

              Nom

            </p>

            <p className="font-bold">

              {user.nom}

            </p>

          </div>

          <div>

            <p className="text-gray-500">

              Email

            </p>

            <p className="font-bold">

              {user.email}

            </p>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Profil;