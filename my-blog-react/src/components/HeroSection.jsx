import React from "react";

function HeroSection(props) {
  return (
    <div className="blog-hero">
      <div className="hero-description">
        <h2>{props.title} </h2>
        <p>{props.subTitle}</p>
      </div>
      <div className="hero-figure">
        <img className="figure-image" src={props.imgHero} />
        <p>{props.heroText}</p>
      </div>
    </div>
  );
}
export default HeroSection;
