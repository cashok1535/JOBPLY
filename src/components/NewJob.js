import React from "react";
import man from "../img/man.png";
import woman from "../img/woman.png";
import { Button } from "./Button";
import acide from "../img/AcideImg.svg";

export const NewJob = () => {
  return (
    <div className="newJob">
      <div className="newJobInfo">
        <div className="jobInfoTitle">Get Start New Job</div>
        <div className="jobInfoText">
          create an account so you can get job information that suits you, and you can apply the
          salary your demand.
        </div>
        <Button text="Create an Account" />
      </div>
      <div className="newJobImg">
        <img src={man} alt="" />
        <img src={woman} alt="" />
      </div>
      <img src={acide} alt="" className="acide" />
    </div>
  );
};
