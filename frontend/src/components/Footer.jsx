import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer text-center text-md-left stylish-color-dark pt-0">
      <div style={{ backgroundColor: "#4285f4" }}>
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right">
              <a className="fb-ic ml-0 px-2">
                <i className="fab fa-facebook-f white-text"> </i>
              </a>

              <a className="tw-ic px-2">
                <i className="fab fa-twitter white-text"> </i>
              </a>

              <a className="gplus-ic px-2">
                <i className="fab fa-google-plus-g white-text"> </i>
              </a>

              <a className="li-ic px-2">
                <i className="fab fa-linkedin-in white-text"> </i>
              </a>

              <a className="ins-ic px-2">
                <i className="fab fa-instagram white-text"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>{process.env.REACT_APP_NAME}</strong>
            </h6>
            <hr
              className="blue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              This website is a project of a student of the VNUHCM - University
              Of Science. Only demo purpose.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr
              className="blue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a href="#!">Bootstrap</a>
            </p>
            <p>
              <a href="#!">ReactJS</a>
            </p>
            <p>
              <a href="#!">VueJS</a>
            </p>
            <p>
              <a href="#!">NodeJS</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr
              className="blue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr
              className="blue mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: 60 }}
            />
            <p>
              <i className="fas fa-home mr-3" /> Ho Chi Minh City
            </p>
            <p>
              <i className="fas fa-envelope mr-3" /> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3" /> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="footer-copyright py-3 text-center">
        <div className="container-fluid">
          © 2022 Copyright: <b>{process.env.REACT_APP_NAME}</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
