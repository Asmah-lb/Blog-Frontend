import React from "react";

import HeroImg from "../assets/imageheroSection.png";
import ImgB1 from "../assets/featured imagefeatured img.png";
import ImgB2 from "../assets/featured imagefeaturedImg.png";
import ImgB3 from "../assets/featured imagefeatureImg.png";
import ImgB4 from "../assets/featured imagefeatImg.png";


import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import BlogBtn from "./BlogBtn";

function HomeMain() {
  return (
    <div className="main-content">
      <HeroSection
        title="Starter - a Minimalist Personal Blog Template."
        subTitle="“Starter” is a, well starter theme designed by nrk9819 for Ghost (CMS), 11ty, enhance, astro and many other site generators."
        imgHero={HeroImg}
        heroText="Exploring the mountains in Indonesia - Unsplash"
      />

      <BlogSection
        blogYear="Recent Publication"
        blogDate="2 Feb, 2024 . #minimalism"
        blogText="Living Light: The Minimalist Lifestyle and its Environmental Impact"
        imgBlog={ImgB1}
      />

      <BlogSection
        blogDate="4 Jan,2024 . #lifestyle"
        blogText="Elevating Your Style with Minimal Environmental Footprint"
        imgBlog={ImgB2}
      />

      <BlogSection
        blogDate="4 Jan,2024 . #lifestyle"
        blogText="Designing Tranquility: How Minimalist Spaces Support Eco-Friendly Living"
        imgBlog={ImgB3}
      />

      <BlogSection
        blogDate="4 Jan,2024 . #lifestyle"
        blogText="Wander Wisely: Sustainable Travel Tips for the Minimalist Explorer"
        imgBlog={ImgB4}
      />
      <BlogBtn
      btnText ="View More"
      />
    </div>
  );
}
export default HomeMain;
