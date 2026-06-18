return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-center mb-2 text-gray-800">
        Connexion
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Connectez-vous à votre compte
      </p>

      <form onSubmit={Laconnexion} className="space-y-5">

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-gray-700">
            Email
          </label>

          <input
            className="
              border
              rounded-xl
              py-3
              px-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
              transition
            "
            type="email"
            placeholder="exemple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2 text-gray-700">
            Mot de passe
          </label>

          <input
            className="
              border
              rounded-xl
              py-3
              px-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-transparent
              transition
            "
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* BOUTON */}
        <button
          type="submit"
          className="
            w-full
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            text-white
            py-3
            rounded-xl
            font-bold
            hover:scale-105
            hover:shadow-lg
            transition
            duration-300
          "
        >
          Se connecter
        </button>

        {/* INSCRIPTION */}
        <div className="text-center">
          <Link
            to="/inscription"
            className="
              text-blue-600
              hover:text-purple-600
              font-semibold
              transition
            "
          >
            Créer un compte
          </Link>
        </div>

      </form>

    </div>

  </div>
)