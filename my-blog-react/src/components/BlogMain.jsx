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


  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] =useState(false);


  async function handleFetchPost() {
    try{
      setIsLoading(true)
      const res = await fetch('https://blog-platform-7q0v.onrender.com/api/posts/');
      const data = await res.json()

      setPosts(data.data.posts);

    } catch (err) {
      console.log(err.message);
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(function(){
    handleFetchPost();
  }, []);

  console.log(posts)

  return (
    <div className="main-content">
      <HeroSection
        title="Living Light: The Minimalist Lifestyle and its Environmental Impact."
        subTitle="Explore the profound connection between embracing minimalism and reducing your environmental footprint, discovering how living light can lead to a more sustainable and fulfilling life."
        imgHero={FigImg}
        heroText="Minimalism is the key of peaceful life"
      />

{isLoading && (
          <p style={{fontSize:'20px', fontWeight: 'bold', textAlign:'center'}}>Loading...</p>
        )}

      {posts.map(post => (
        <BlogSection
        blogDate="2 Feb, 2024 . #minimalism"
        blogText={post.title}
        imgBlog={`https://blog-platform-7q0v.onrender.com/assets/post/${post.image}`}
        id={post._id}
        />
      ))}

      
      <BlogBtn btnText="Load Older" />
    </div>
  );
};
export default BlogMain;
