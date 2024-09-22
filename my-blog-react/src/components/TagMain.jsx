import React from "react";

import TagImg from '../assets/image.png'
import ImgB1 from '../assets/featured imagefeatured img.png'
import ImgB2 from '../assets/featured image.png'
import ImgB3 from '../assets/featured imageT.png'
import ImgB4 from '../assets/featured imageT2.png'

import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import BlogBtn from "./BlogBtn";


function TagMain(){
return(
<div className="main-content">
      <HeroSection
        title="#sustainability"
        subTitle="Sustainability is the ability to exist and develop without depleting natural resources for the future."
        imgHero={TagImg}
      />

      <BlogSection
        blogYear="2024"
        blogDate="2 Feb"
        blogText="Living Light: The Minimalist Lifestyle and its Environmental Impact"
        imgBlog={ImgB1}
      />

      <BlogSection
      blogYear='2023'
        blogDate="21 Nov"
        blogText="How Minimalist Spaces Support Eco-Friendly Living"
        imgBlog={ImgB2}
      />

      <BlogSection
        blogDate="11 Oct"
        blogText="Simplifying Life for a Balanced, Eco-Conscious Tomorrow"
        imgBlog={ImgB3}
      />

      <BlogSection
        blogDate="1 Oct"
        blogText="Redefining Success in a Earth-Friendly Life"
        imgBlog={ImgB4}
      />
      <BlogBtn
      btnText ="Load Older"
      />
    </div>
);
}
export default TagMain