import { useState } from "react";
import "./App.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Components */

import Header from "./components/header/Header";
import TopFold from "./components/topfold/TopFold";
import Brands from "./components/brands/Brands";
import TrendingNft from "./components/trending/TrendingNft";
import InfoSection from "./components/info/InfoSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="max-width">
      <Header />
      <TopFold />
      <Brands />
      <TrendingNft />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
