import React, { useEffect, useState } from "react";

import HeroImg from "../assets/imageheroSection.png";
import ImgB1 from "../assets/featured imagefeatured img.png";
import ImgB2 from "../assets/featured imagefeaturedImg.png";
import ImgB3 from "../assets/featured imagefeatureImg.png";
import ImgB4 from "../assets/featured imagefeatImg.png";

import HeroSection from "./HeroSection";
import BlogSection from "./BlogSection";
import BlogBtn from "./BlogBtn";

function HomeMain() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleFetchPost() {
    try {
      setIsLoading(true)
      const res = await fetch("https://blog-platform-7q0v.onrender.com/api/posts/");
      const data = await res.json();

      setPosts(data.data.posts);
    } catch (err) {
      console.log(err.message);
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(function () {
    handleFetchPost();
  }, []);

  console.log(posts);

  return (
    <div className="main-content">
      <HeroSection
        title="Starter - a Minimalist Personal Blog Template."
        subTitle="“Starter” is a, well starter theme designed by nrk9819 for Ghost (CMS), 11ty, enhance, astro and many other site generators."
        imgHero={HeroImg}
        heroText="Exploring the mountains in Indonesia - Unsplash"
      />

      <div className="blog-articles">
        <h3>Recent Publication</h3>

        {isLoading && (
          <p style={{fontSize:'20px', fontWeight: 'bold', textAlign:'center'}}>Loading...</p>
        )}

        {posts.map((post) => (
          <BlogSection
            blogDate="2 Feb, 2024 . #minimalism"
            blogText={post.title}
            imgBlog={`http://localhost:3001/assets/post/${post.image}`}
            id={post._id}
          />
        ))}
      </div>

      <BlogBtn btnText="View More" />
    </div>
  );
}
export default HomeMain;
