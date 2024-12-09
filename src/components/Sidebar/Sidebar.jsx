import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <button className="btn btn-primary w-100 mb-3">+ Nouveau</button>
      <ul className="list-unstyled">
        <li className="mb-2">
          <a href="#" className="text-decoration-none">
            Mes projets
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none">
            Partager avec moi
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none">
            Récent
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none">
            Suivi
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-decoration-none">
            Corbeille
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
