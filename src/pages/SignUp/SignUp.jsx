import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Data Submitted:", formData);
    alert("Account Created Successfully!");
    // You can handle API calls here to submit `formData`
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Créer un Compte</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Entrez votre nom d'utilisateur"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email">Adresse Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Entrez votre adresse email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password">Mot de Passe</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Créez un mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="btn btn-success signup-button">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
