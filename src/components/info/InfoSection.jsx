import React from "react";

import "./InfoSection.css";

import { INFO_ITEMS } from "../../data/infoItems";
import InfoItem from "./infoItem/InfoItem";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="is-heading absolute-center">
        <span className="heading-gradient">Create and Sell your NFT's</span>
      </div>
      <div className="is-items-container">
        {INFO_ITEMS.map((item) => (
          <InfoItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
