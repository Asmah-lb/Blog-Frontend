import React from "react";

function BlogBtn(props){
    return(
        <button className="blog-button">
        <p>{props.btnText}</p>
      </button>
    );
}
export default BlogBtn