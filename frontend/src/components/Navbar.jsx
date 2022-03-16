import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar white">
      <div className="container">
        {/* SideNav slide-out button */}
        <div className="float-left mr-2">
          <a href="#" data-activates="slide-out" className="button-collapse">
            <i className="fas fa-bars" />
          </a>
        </div>
        <a className="navbar-brand font-weight-bold" href="#">
          <strong>{process.env.REACT_APP_NAME}</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link dark-grey-text font-weight-bold" href="#">
                <i className="fas fa-envelope blue-text" />
                Contact <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link dark-grey-text font-weight-bold" href="#">
                <i className="fas fa-cog blue-text" />
                Settings
              </a>
            </li>
            <li className="nav-item dropdown ml-3">
              <a
                className="nav-link dropdown-toggle dark-grey-text font-weight-bold"
                id="navbarDropdownMenuLink-4"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-user blue-text" />
                Profile{" "}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right dropdown-cyan"
                aria-labelledby="navbarDropdownMenuLink-4"
              >
                <a className="dropdown-item waves-effect waves-light" href="#">
                  My account
                </a>
                <a className="dropdown-item waves-effect waves-light" href="#">
                  Log out
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
