import React from "react";
import People from "../img/People.png";
import {ImgOnCircle} from "./ImgOnCircle";
import Star from "../img/Star.svg";
import Maliha from "../img/Maliha.png";
import Adam from "../img/Adam.png";

export const HeaderImg = () => {
  return (
    <div className="headerImg">
      <img src={People} alt="" />
      <div className="circle big"></div>
      <div className="circle little"></div>
      <ImgOnCircle />
      <div className="parent">
        <div className="peopleImg Maliha">
          <img className="people" src={Maliha} alt="" />
          <div className="peopleBackPurple"></div>
          <div className="peopleImgName">Maliha</div>
          <div className="peopleImgProf">UX Designer</div>
          <div className="grade">
            <img src={Star} alt="" />
            4.5
          </div>
        </div>
      </div>
      <div className="parent">
        <div className="peopleImg Adam">
          <img className="people" src={Adam} alt="" />
          <div className="peopleBackYellow"></div>
          <div className="peopleImgName">Adam</div>
          <div className="peopleImgProf">Project Manager</div>
          <div className="grade">
            <img src={Star} alt="" />
            4.8
          </div>
        </div>
      </div>
    </div>
  );
};

