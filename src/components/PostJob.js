import React from "react";
import {Button} from "./Button";
import img from "../img/postImg.png"

export const PostJob = () => {
  return (
    <div className="postJob">
      <img className="postJobImg" src={img} alt="" />
      <div>
        <div className="jobInfoTitle post">Post a Job for UX Designer</div>
        <div className="jobInfoText">
          create an account so you can get job information that suits you, and
          you can apply the salary your demand.
        </div>
        <Button text="Post a Job" />
      </div>
    </div>
  );
};


