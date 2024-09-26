import React, { useEffect, useState } from "react";

const posts = [];

function BlogCatalogue() {
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useAuthContext();

  useEffect(function () {
    async function handleFatchMyPosts() {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3001/api/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
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
      {posts.length > 1 ? (
        <div className="page-grid">
          {posts.map((post) => (
            <figure
              className="product-figure"
              style={{ position: "relative" }}
              key={""}
            >
              <img className="product-img" src={""} alt="" />
              <figcaption className="product-details">
                <h4 className="product-heading">Blog Title</h4>
                <p className="product-text">Description</p>
              </figcaption>
            </figure>
          ))}
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
