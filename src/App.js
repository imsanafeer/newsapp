import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsArticle from "./components/NewsArticle";
import NewsPage from "./components/NewsPage";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [headline, setHeadline] = useState("Headlines");
  return (
    <div className="App">
      <Navbar setCategory={setCategory} setHeadline={setHeadline}/>
      <NewsPage category={category} headline = {headline} />
      <Footer/>
    </div>
  );
}

export default App;
