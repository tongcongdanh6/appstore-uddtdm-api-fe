import React from "react";

const Advertising = () => {
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div className="view z-depth-1">
            <img
              src="assets/images/mobile-ads-anatomy-og.jpeg"
              className="img-fluid"
              alt="sample image"
            />
            <div className="mask rgba-stylish-slight">
              <div className="dark-grey-text text-right pt-lg-5 pt-md-1 mr-5 pr-md-4 pr-0">
                <div>
                  <a>
                    <span className="badge badge-danger">SALE</span>
                  </a>
                  <h2 className="card-title font-weight-bold pt-md-3 pt-1">
                    <strong>Sale 20% off on every mobile application!</strong>
                  </h2>
                  <p className="pb-lg-3 pb-md-1 clearfix d-none d-md-block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <a className="btn mr-0 btn-success btn-rounded clearfix d-none d-md-inline-block">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
