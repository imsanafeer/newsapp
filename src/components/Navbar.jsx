import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ setCategory ,setHeadline}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleCategoryChange = (category, headline) => {
    setCategory(category);
    setHeadline(headline);
    setIsMenuOpen(false); // Close the menu after selection
  };

  const handleHomeClick = () => {
    window.location.reload();
  };
  
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <a href="#" onClick={handleHomeClick}>News</a>
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
      <ul>
          <li><a onClick={() => handleCategoryChange("business", "Business")}>Business</a></li>
          <li><a onClick={() => handleCategoryChange("sports", "Sports")}>Sports</a></li>
          <li><a onClick={() => handleCategoryChange("technology", "Technology")}>Technology</a></li>
          <li><a onClick={() => handleCategoryChange("entertainment", "Entertainment")}>Entertainment</a></li>
          <li><a onClick={() => handleCategoryChange("health", "Health")}>Health</a></li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
    </div>
  );
};

export default Navbar;
