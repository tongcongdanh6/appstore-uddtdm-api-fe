import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import axios from "axios";

const Intro = () => {
  const dispatcher = useDispatch();
  const fetchCategories = async () => {
    try {
      const result = await axios.get(
        process.env.REACT_APP_API_URL + "/categories"
      );
      // dispatch to store
      dispatcher({
        type: "SET_CATEGORIES",
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  },[]);

  const categoriesData = useSelector((state) => state.categories);

  const renderCategoryItem = () => {
    return categoriesData.list.map((category) => {
      return <CategoryItem key={category.id} category={category} />;
    });
  }

  return (
    <section className="section pt-4">
      <div className="row">
        <div className="col-lg-8 col-md-12 mb-3 pb-lg-2">
          <div className="view zoom z-depth-1">
            <img
              src="assets/images/experiences_devices__ca7eoggbh2z6_large_2x.jpeg"
              className="img-fluid"
              alt="sample image"
            />
            <div className="mask rgba-white-light d-flex justify-content-center align-items-center">
              <div className="dark-grey-text pt-3 pl-4">
                <div>
                  <h2 className="card-title font-weight-bold pt-2">
                    <strong>
                      The apps you love. From a place you can trust.
                    </strong>
                  </h2>
                  <p className>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </p>
                  <a className="btn btn-danger btn-sm btn-rounded clearfix d-none d-md-inline-block">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 mb-4">
          <section className="section">
            <h2>Categories</h2>
            <ul className="list-group z-depth-1">
              {renderCategoryItem()}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Intro;
