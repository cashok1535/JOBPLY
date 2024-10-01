import React from "react";

export const CategoryElement = ({ img, title, text }) => {
  return (
    <>
      <div className="categoryElement">
        <div className="categoryImg">
          <img src={img} alt="" />
        </div>
        <div className="categoryName">{title}</div>
        <div className="categoryQuantity">{text}</div>
      </div>
    </>
  );
};

