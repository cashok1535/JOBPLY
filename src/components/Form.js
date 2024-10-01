import React from "react";
import plane from "../img/paper-plane.svg"
import dots from "../img/Group_202.svg"
import lines from "../img/Group_419.svg"


export const Form = () => {
  return (
    <div className="formBackground">
      <div className="formElement">
        <div className="formTitle">Subscribe to get update vacancy post</div>
        <form className="form">
          <input className="formInput" placeholder="infomail856@gmail.com" />
          <button className="buttonSecond">Subscribe <img src={plane} alt="" /></button>
        </form>
        <img className="dots" src={dots} alt="" />
        <img className="lines" src={lines} alt="" />
      </div>
    </div>
  );
};
