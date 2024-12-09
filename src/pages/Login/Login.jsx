import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Se Connecter</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              placeholder="Entrez votre email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de Passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary login-button">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
