import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContent";

const posts = [];

function BlogCatalogue() {
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {token} = useAuthContext();
  const {author} = useParams();

  useEffect(function () {
    async function handleFatchMyPosts() {
      try {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3001/api/posts/post-by-author/${author}`, 
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer {token}'
          },
        });
        const data = await res.json();
        console.log(res, data)
        setMyPosts(data.data.posts);

      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    handleFatchMyPosts();
  }, []);

  return (
    <>
      {isLoading && (
        <p
          style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}
        >
          Loading...
        </p>
      )}
      {(myPosts.length > 1) ? (
        <div className="page-grid">
          {myPosts.map((post) => 
            <figure
              className="product-figure"
              style={{ position: "relative" }}
              key={""}
            >
              <img className="product-img" src={""} alt="" />
              <figcaption className="product-details">
                <h4 className="product-heading">{post.title}</h4>
                <p className="product-text"> {post.content} </p>
              </figcaption>
            </figure>
          )}
        </div>
      ) : (
        <div
          className="note-box"
          style={{ fontSize: "1.4rem", textAlign: "center" }}
        >
          <p>You dont have any blog post!</p>
        </div>
      )}
    </>
  );
}

export default BlogCatalogue;
