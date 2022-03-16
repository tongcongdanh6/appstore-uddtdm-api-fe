import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem2 from "./ProductItem2";
import axios from "axios";

const ProductList = () => {
  const dispatcher = useDispatch();
  const fetchLastestProduct = async () => {
    try {
      const result = await axios.get(
        process.env.REACT_APP_API_URL + "/products/lastest"
      );
      // dispatch to store
      dispatcher({
        type: "SET_LASTEST_PRODUCTS",
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const fetchBestSellerProducts = async () => {
    try {
      const result = await axios.get(
        process.env.REACT_APP_API_URL + "/products/best-seller"
      );
      // dispatch to store
      dispatcher({
        type: "SET_BEST_SELLER_PRODUCTS",
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchLastestProduct();
    fetchBestSellerProducts();
  },[]);

  const productsData = useSelector((state) => state.products);
  
  const renderLastestProductItem = () => {
    return productsData.lastestProducts.map((product) => {
      return <ProductItem2 key={product.id} product={product} />;
    });
  }

  const renderBestSellerProductItem = () => {
    return productsData.bestSellerProducts.map((product) => {
      return <ProductItem2 key={product.id} product={product} />;
    });
  }

  const renderRandomProductItem = () => {
    // Random 3 products from productsData.productList
    const randomProducts = productsData.productList.sort(() => 0.5 - Math.random()).slice(0, 3);
    return randomProducts.map((product) => {
      return <ProductItem2 key={product.id} product={product} />;
    });
  }

  return (
    <section className="mb-5">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-12 pt-4">
          <hr />
          <h5 className="text-center font-weight-bold dark-grey-text">
            <strong>New Apps</strong>
          </h5>
          <hr />
          {renderLastestProductItem()}
        </div>

        <div className="col-lg-4 col-md-12 pt-4">
          <hr />
          <h5 className="text-center font-weight-bold dark-grey-text">
            <strong>Best Sellers</strong>
          </h5>
          <hr />

          {renderBestSellerProductItem()}
        </div>

        <div className="col-lg-4 col-md-12 pt-4">
          <hr />
          <h5 className="text-center font-weight-bold dark-grey-text">
            <strong>Random Apps</strong>
          </h5>
          <hr />
          {renderRandomProductItem()}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
