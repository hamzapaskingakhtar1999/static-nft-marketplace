import React from "react";
import "./TrendingNft.css";
import Slider from "react-slick";

import { TRENDING_NFTS } from "../../data/trendingNfts";
import TrendingCard from "./trendingCard/TrendingCard";

import Button from "../../common/styles/Button/index";

const TrendingNFT = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    arrow: false,
    speed: 500,
  };

  return (
    <div className="trending-nfts">
      <div className="trending-nfts-title absolute-center">
        <span className="heading-gradient">Trending NFT's</span>
      </div>
      <div className="tn-bg-blob"></div>
      <Slider {...settings}>
        {TRENDING_NFTS.map((nft) => (
          <TrendingCard nft={nft} />
        ))}
      </Slider>
      <div className="tn-btn absolute-center">
        <Button btnText="SEE MORE" type="Secondary" customClass="seemore-btn" />
      </div>
    </div>
  );
};

export default TrendingNFT;
