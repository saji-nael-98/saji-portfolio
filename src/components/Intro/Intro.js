import React from "react";
import "./Intro.css";
import image from "../../assests/images/avataaars.svg";
import Divider from "../Divider";
function Intro() {
  return (
    <section className="intro centered" style={{ flexDirection: "column" }}>
      <img className="intro__image" src={image} alt="protfolio image" />
      <h1 className="intro__heading">start bootstrap</h1>
      <Divider />
      <p className="intro__subtitle">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}

export default Intro;
