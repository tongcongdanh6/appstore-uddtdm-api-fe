import React from "react";

const MegaMenu = () => {
  return (
    <div className="container mt-5 pt-3">
      <nav className="navbar navbar-expand-lg z-depth-2 navbar-dark info-color mt-5 py-4">
        <a className="font-weight-bold white-text mr-4" href={true}>
          Home
        </a>
        <a className="font-weight-bold white-text mr-4" href={true}>
          Customer Service
        </a>
      </nav>
    </div>
  );
};

export default MegaMenu;
