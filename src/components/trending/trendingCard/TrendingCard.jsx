import React from "react";

/* CSS */
import "./TrendingCard.css";

const TrendingCard = ({ nft }) => {
  return (
    <div className="trending-card absolute-center">
      <div className="tc-inner-wrapper">
        <div className="tc-content">
          <img src={nft.banner} className="tc-banner" alt={nft.user_name} />
          <div className="tc-user-info">
            <div className="tc-ui-left">
              <img
                src={nft.user_photo}
                className="tc-user-logo"
                alt={nft.user_name}
              />
              <div>
                <div className="tc-ui-username">{nft.username}</div>
                <div className="tc-ui-userhandle">{nft.userhandle}</div>
              </div>
            </div>
            <img
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
              alt="Ethereum"
              className="tc-solana-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
