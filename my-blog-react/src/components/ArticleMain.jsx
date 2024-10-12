import React, { useEffect, useState } from "react";
import ArticleImg from "../assets/imageblog.png";
import { useParams } from "react-router-dom";

const ArticleMain = function () {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  async function fetchArticle() {
    try {
      const res = await fetch(`http://localhost:3001/api/posts/${id}`);

      const data = await res.json();

      console.log(res, data);
      setArticle(data.data.post);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(function () {
    fetchArticle();
    window.scrollTo(0, 0);
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

      <section className="article-section">
        <div className="article-hero">
          <div className="article-date">
            <p>February 2, 2024 in #sustainability</p>
            <p>5 min read</p>
          </div>
          <div className="article-detail">
            <div className="article-description">
              <h2>{article.title}</h2>
              <p>{article.subTitle}</p>
            </div>
            <img
              className="article-image"
              src={`http://localhost:3001/assets/post/${article.image}`}
            />
          </div>
          <div className="article-content">
            <p>
              {article.content}
            </p>
          </div>
          <div className="tags">
            <p>#sustainability</p>
            <p>#lifestyle</p>
            <p>#resource</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ArticleMain;
