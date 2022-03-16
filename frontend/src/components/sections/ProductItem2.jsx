import React from "react";

const ProductItem2 = ({ product }) => {
  const { name, price, thumbnail_url, apple_store_url, rating } = product;
  return (
    <div className="row mt-5 py-2 mb-4 hoverable align-items-center">
      <div className="col-6">
        <a>
          <img src={thumbnail_url} className="img-fluid" />
        </a>
      </div>
      <div className="col-6">
        <a className="pt-5">
          <strong>{name}</strong>
        </a>

        <ul className="rating inline-ul">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <li>
                <i className="fas fa-star blue-text" />
              </li>
            ))}
        </ul>

        <h6 className="h6-responsive font-weight-bold dark-grey-text">
          <strong>{price.toLocaleString()} đ</strong>
        </h6>
      </div>
    </div>
  );
};

export default ProductItem2;
