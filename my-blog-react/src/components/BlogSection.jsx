import React from "react";
import { Link } from "react-router-dom";

function BlogSection(props) {
  return (
      <Link to={`/article/${props.id}`} style={{textDecoration: "none"}}>
      <div className="blog-post">

        <div className="blog-info">
          <p className="blog-date">{props.blogDate}</p>
          <h2 className="blog-text">{props.blogText}</h2>
        </div>
        
        <img className="blog-img" src={props.imgBlog} />
        
      </div>
      </Link>
  );
}
export default BlogSection;
