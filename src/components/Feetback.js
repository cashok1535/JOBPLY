import React, { useState, useRef } from "react";
import {FeetbackElement} from "./FeetbackElement";
import Maria from "../img/Maria.png";
import Mithela from "../img/Mithela.png";
import AdamFeetback from "../img/AdamFeetback.png";

const img = {
  Maria: Maria,
  Mithela: Mithela,
  AdamFeetback: AdamFeetback,
};
const feetbacks = [
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Maria Jannat",
    prof: "Content Writer",
    img: img.Maria,
    rating: 4,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Mithela",
    prof: "UI Designer",
    img: img.Mithela,
    rating: 5,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Adam",
    prof: "Developer",
    img: img.AdamFeetback,
    rating: 2,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Maria Jannat",
    prof: "Content Writer",
    img: img.Maria,
    rating: 4,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Mithela",
    prof: "UI Designer",
    img: img.Mithela,
    rating: 5,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Adam",
    prof: "Developer",
    img: img.AdamFeetback,
    rating: 2,
  },
  {
    text: "Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about",
    name: "Adam",
    prof: "Developer",
    img: img.AdamFeetback,
    rating: 2,
  },
];
const count = Math.ceil(feetbacks.length / 2);

export const Feetback = () => {
  const [active, setActive] = useState(0);
  const feetbackRef = useRef(null);
  const handleClick = (nextActiveButton) => () => {
    setActive(nextActiveButton);
    feetbackRef.current.style.left = nextActiveButton * -1270 + "px";
  };

  return (
    <div className="feetback">
      <div className="jobInfoTitle feetbackTitle">Great Feedback From Candidates</div>
      <div className="parentFeetbackElements">
        <div className="feetbackElements" ref={feetbackRef}>
          {feetbacks.map((feetback, index) => (
            <FeetbackElement
              text={feetback.text}
              img={feetback.img}
              name={feetback.name}
              prof={feetback.prof}
              rating={feetback.rating}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="feetbackButtons">
        {Array.from(Array(count).keys()).map((count, index) => (
          <button
            className={`feetbackButton ${active === index ? "active" : "inActive"}`}
            onClick={handleClick(index)}
            key={index}
          ></button>
        ))}
      </div>
    </div>
  );
};

