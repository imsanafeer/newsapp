import React from "react";
import image from "../assets/news_en_1920x1080.jpg";
import image2 from "../assets/bnews.webp"
import "./NewsArticle.css";

const NewsArticle = ({ title, description, src, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="article-link">
    <div className="article-container" >
      <img src={src ? src : image2} />
      <div className="article-content">
        <h3>{title.slice(0,55) + "..."}</h3>
        <p>
          {description
            ? description.slice(0,100) + "..."
            : "Description unavailable at the moment. Check back later for updates on the latest events and developments"}
        </p>
        <br/>
        <button>
          <a href={url}>Read More</a>
        </button>
      </div>
    </div>
    </a>
  );
};

export default NewsArticle;
