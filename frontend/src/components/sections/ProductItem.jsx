import React from "react";

const ProductItem = ({ product }) => {
  const { id, name, description, thumbnail_url, price, rating, is_best_seller, apple_store_url } = product;
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="card card-ecommerce">
        <div className="view overlay d-flex justify-content-center">
          <img
            src={thumbnail_url}
            className="img-fluid"
            alt
          />
          <a>
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body">
          <h5 className="card-title mb-1">
            <strong>
              <a href className="dark-grey-text">
                {name} 
              </a>
            </strong>
            {is_best_seller && <span className="badge badge-danger mb-2">Best Seller</span> || ""}
          </h5>
          
          

          <ul className="rating">
            {Array(rating).fill().map((_, index) => (
              <li>
                <i className="fas fa-star blue-text" />
              </li>
            ))}
          </ul>

          <p className="description text-justify">
            <span className="mr-1">{description}</span>
          </p>

          <div className="card-footer pb-0">
            <div className="row mb-0">
              <span className="float-left text-primary" style={{fontSize: "22px"}}>
                <strong>{price.toLocaleString()} đ</strong>
              </span>
              {/* <span className="float-right" style={{fontSize: "22px"}}>
                <a
                  className
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Add to Cart"
                >
                  <i className="fas fa-shopping-cart ml-3" />
                </a>
              </span> */}
              <a className="btn btn-outline-primary btn-sm" href={apple_store_url} target="_blank">Go to Apple Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
