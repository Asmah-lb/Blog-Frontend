import React from "react";

function BlogSection(props) {
  return (
    <div className="blog-articles">
      <h3>{props.blogYear}</h3>

      <div className="blog-post">
        <div className="blog-info">
          <p className="blog-date">{props.blogDate}</p>
          <h2 className="blog-text">{props.blogText}</h2>
        </div>
        
        <img className="blog-img" src={props.imgBlog} />
      </div>
    </div>
  );
}
export default BlogSection;
