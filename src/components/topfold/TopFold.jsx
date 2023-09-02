import React from "react";
import "./TopFold.css";

import Button from "../../common/styles/Button/index";

const TopFold = () => {
  return (
    <div className="topfold absolute-center">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, Collect, & Sell{" "}
          <span className="heading-gradient">Extraordinary</span> NFT's
        </div>
        <div className="tf-description">
          Buy and sell the most trending NFT's out there. All the best NFT's
          from Seiwa.
        </div>
        <div className="tf-left-buttons">
          <Button btnType="PRIMARY" btnText="EXPLORE" />
          <Button
            btnType="SECONDARY"
            btnText="CREATE"
            customClass="tf-left-secondary-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">1K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem absolute-center">
            <div className="tf-infoItem-count">220K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>

      {/* Right */}

      <div className="tf-right">
        <div className="tf-r-bg-blob"></div>

        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item">
            <img
              className="tf-r-diamond-img absolute-center"
              alt="Diamond Design"
              src="https://i.gifer.com/origin/23/23ef4d2b7c0654d56a95e100d1b30de4_w200.webp"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="Diamond Design"
              src="https://i.gifer.com/origin/52/523e07e0ce014e99ccb95a9667dff742_w200.webp"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="Diamond Design"
              src="https://i.gifer.com/origin/bc/bc33f2b01b543782cd9ccb2f23f2c4c6_w200.webp"
            />
          </div>
          <div className="tf-r-diamond-item absolute-center">
            <img
              className="tf-r-diamond-img"
              alt="Diamond Design"
              src="https://media0.giphy.com/media/ho0xXatV7b3Fo1ZRXN/200w.webp?cid=ecf05e47k4mz4r19gdlu6dppihctz51v9hygv3mt1wzwvcon&ep=v1_gifs_search&rid=200w.webp&ct=g"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
