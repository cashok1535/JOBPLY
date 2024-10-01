import React from "react";
import google from "../img/google.svg";
import indeed from "../img/indeed.svg";
import Group from "../img/Group.svg";
import paypal from "../img/paypal.svg"

export const ImgOnCircle = () => {
  return (
    <>
      <div className="imgOnCircle google">
        <img src={google} alt="" />
      </div>
      <div className="imgOnCircle indeed">
        <img src={indeed} alt="" />
      </div>
      <div className="imgOnCircle group">
        <img src={Group} alt="" />
      </div>
      <div className="imgOnCircle paypal">
        <img src={paypal} alt="" />
      </div>
    </>
  );
};

