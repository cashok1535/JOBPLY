import React from "react";
import {CategoryElement} from "./JobCategoryElement";
import Accouting from "../img/Accouting.svg";
import UI from "../img/UI.svg";
import Content from "../img/content.svg";
import AccoutingSecond from "../img/AccoutingSecond.svg";
import Digital from "../img/Digital.svg";
import Technical from "../img/Technical.svg";
import Human from "../img/Human.svg";
import Art from "../img/Art.svg";
import AcideImg from "../img/AcideImg.svg";



const images = {
  Accouting: Accouting,
  UI: UI,
  Content: Content,
  AccoutingSecond: AccoutingSecond,
  Digital: Digital,
  Technical: Technical,
  Human: Human,
  Art: Art,
};

const category = [
  {
    img: images.Accouting,
    title: "Accouting & Finance",
    text: "125 Job Vacancy",
  },
  {
    img: images.UI,
    title: "UI/UX Design",
    text: "52 Job Vacancy",
  },
  {
    img: images.Content,
    title: "Content Writing",
    text: "150 Job Vacancy",
  },
  {
    img: images.AccoutingSecond,
    title: "Accouting & Finance",
    text: "125 Job Vacancy",
  },
  {
    img: images.Digital,
    title: "Digital Marketing",
    text: "150 Job Vacancy",
  },
  {
    img: images.Technical,
    title: "Technical Support",
    text: "350 Job Vacancy",
  },
  {
    img: images.Human,
    title: "Human Resource",
    text: "35 Job Vacancy",
  },
  {
    img: images.Art,
    title: "Art & Illustration",
    text: "52 Job Vacancy",
  },
];

export const JobCategories = () => {
  return (
    <div className="jobCategories">
      <div className="jobCategoriesTitle">Job Categories</div>
      <div className="category">
        {category.map((category, index) => (
          <CategoryElement 
          img={category.img} 
          title={category.title} 
          text={category.text}
          key={index} />
        ))}
      </div>
      <div className="acideImgLeft">
        <img src={AcideImg} alt="" />
      </div>
    </div>
  );
};


