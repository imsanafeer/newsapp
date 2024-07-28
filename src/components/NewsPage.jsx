import React, { useEffect, useState } from "react";
import newsicon from "../assets/unnamed.webp";
import "./NewsPage.css";
import NewsArticle from "./NewsArticle";
import Navbar from "./Navbar";

const NewsPage = ({ category,headline }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=638d131a6b8841efb48620eda5fc83f4`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false); // Set loading to false after data is fetched
      });
  }, [category]);

  return (
    <div className="page-container">
      <div className="headline">
        <div className="headline-logo"> <img src={newsicon} />
        <h1>{loading ? (
            <h1>Loading...</h1> // Show loading text while data is being fetched
          ) : (
            <h1>{headline}</h1>
          )}</h1>
        </div>
        
        <div className="main-page">
          {articles.map((news, index) => {
            return (
              <NewsArticle
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
