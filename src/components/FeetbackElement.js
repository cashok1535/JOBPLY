import React from "react";
import Star from "../img/StarSecond.svg";
import Quotes from "../img/Quotes.svg";

export const FeetbackElement = ({ text, img, name, prof, rating }) => {
  return (
    <div className="feetbackElement">
      <img className="quotes" src={Quotes} alt="" />
      <div className="feetbackElementText">{text}</div>
      <div className="feetbackPerson">
        <img src={img} alt="" />
        <div className="personInfo">
          <div className="personInfoName">{name}</div>
          <div className="personInfoProf">{prof}</div>
          <div className="stars">
            {Array.from(Array(rating).keys()).map((rating) => (
              <img src={Star} alt="" key={rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


