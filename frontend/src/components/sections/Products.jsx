import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Products = () => {
  const productsAll = useSelector((state) => state.products);

  const renderProductsList = () => {
    return productsAll.productList.map((product) => {
      return <ProductItem key={product.id} product={product} />;
    });
  }
  return (
    <section>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {renderProductsList()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
