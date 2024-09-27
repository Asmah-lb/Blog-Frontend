import React, { useEffect, useState } from "react";
import FigImg from "../assets/imageblog.png";
import ImgB1 from "../assets/featured imagefeatured img.png";
import ImgB2 from "../assets/featured imagefeaturedImg.png";
import ImgB3 from "../assets/featured image1.png";
import ImgB4 from "../assets/featured image2.png";
import ImgB5 from "../assets/featured image3.png";
import ImgB6 from "../assets/featured image4.png";
import ImgB7 from "../assets/featured image5.png";

import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import BlogBtn from "./BlogBtn";

const BlogMain = function () {

// const [posts, setPosts] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// async function handleFetchPost() {
//   try{
//     setIsLoading(true)
//     const res = await fetch('http://localhost:3001/api/posts');
//     const data = await res.json()

//     setPosts(data.data.posts);

//   }catch(err){
//     console.log(err.message)
//   }finally{
//     setIsLoading(false)
//   }
  
// }

// useEffect(function(){
//   handleFetchPost();
// }, []);

  return (
    <div className="main-content">
      <HeroSection
        title="Living Light: The Minimalist Lifestyle and its Environmental Impact."
        subTitle="Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life."
        imgHero={FigImg}
        heroText="Minimalism is the key of peaceful life"
      />

      <BlogSection
        blogYear="2024"
        blogDate="2 Feb . #minimalism"
        blogText="Living Light: The Minimalist Lifestyle and its Environmental
                Impact"
        imgBlog={ImgB1}
      />

      {/* <BlogSection
        blogDate="4 Jan,2024 . #lifestyle"
        blogText="Elevating Your Style with Minimal Environmental Footprint"
        imgBlog={ImgB2}
      />

      <BlogSection
        blogYear="2023"
        blogDate="19 Dec . #minimalism"
        blogText="Capsule Closets: Elevating Your Style with Minimal Environmental Footprint"
        imgBlog={ImgB3}
      />

      <BlogSection
        blogDate="21 Nov . #sustainability"
        blogText="How Minimalist Spaces Support Eco-Friendly Living"
        imgBlog={ImgB4}
      />

      <BlogSection
        blogDate="11 Oct . #future"
        blogText="Simplifying Life for a Balanced, Eco-Conscious Tomorrow"
        imgBlog={ImgB5}
      />

      <BlogSection
        blogDate="1 Oct . #lifestyle"
        blogText="Redefining Success in a Earth-Friendly Life"
        imgBlog={ImgB6}
      />

      <BlogSection
        blogDate="5 Jul . #lifestyle"
        blogText="Zero-Waste Living"
        imgBlog={ImgB7}
      /> */}
      <BlogBtn btnText="Load Older" />
    </div>
  );
};
export default BlogMain;
