import React from "react";
import { Link } from "react-router-dom";

function HeroSection(props) {
  return (
    <Link to={`/article/${props.id}`} style={{textDecoration: "none"}}>
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
    </Link>
  );
}
export default HeroSection;
