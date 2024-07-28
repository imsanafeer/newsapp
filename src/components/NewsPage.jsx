import React, { useEffect, useState } from "react";
import newsicon from "../assets/unnamed.webp";
import "./NewsPage.css";
import NewsArticle from "./NewsArticle";
// import Navbar from "./Navbar";

const NewsPage = ({ category, headline }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching data

      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`API Limit Reached`);
        }
        const data = await response.json();
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="page-container">
      <div className="headline">
        <div className="headline-logo">
          <img src={newsicon} alt="" />
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error: {error}</h1>
          ) : (
            <h1>{headline}</h1>
          )}
        </div>
      </div>
      <div className="main-page">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsArticle
              key={news.title || index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          !loading && !error && <p>No articles available</p>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
