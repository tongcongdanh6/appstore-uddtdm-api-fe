import React from "react";

const CategoryItem = ({category}) => {
  const {name} = category;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <a className="dark-grey-text font-small">
        <i className="fas fa-laptop dark-grey-text mr-2" aria-hidden="true" />
        {name}
      </a>
      <a href />
      {/* <span className="badge badge-danger badge-pill">43</span> */}
    </li>
  );
};

export default CategoryItem;
