import React from "react";

function ListUser() {
  return (
    <div className="listuser">
      <h4>Our team</h4>
      <div className="listEmp">
        <a
          href="https://www.linkedin.com/in/nathalie-dune-1b4a09245/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/employees/Nathalie_Profile.png `}
            alt="utilisateur1"
          />
          <p style={{ opacity: "0.5", textAlign: "center" }}>Nathalie</p>
        </a>
        <a
          href="https://www.linkedin.com/in/amelie-ghp/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/employees/Amelie_Profile.jpg`}
            alt="utilisateur2"
          />
          <p style={{ opacity: "0.5", textAlign: "center" }}>Amélie</p>
        </a>
        <a
          href="https://www.linkedin.com/in/naomisantos09/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/employees/Naomie_Profile.png`}
            alt="utilisateur4"
          />
          <p style={{ opacity: "0.5", textAlign: "center" }}>Naomie</p>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-michel-019510251/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/employees/Nicolas_Profile.jpg`}
            alt="utilisateur3"
          />
          <p style={{ opacity: "0.5", textAlign: "center" }}>Nicolas</p>
        </a>
      </div>
    </div>
  );
}

export default ListUser;
