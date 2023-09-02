import React from "react";

import "./InfoItem.css";

const InfoItem = ({ item }) => {
  return (
    <div className="info-item absolute-center">
      <img alt={item.title} className="ii-icon" src={item.icon} />
      <div className="ii-title">{item.title}</div>
      <div className="ii-description">{item.description}</div>
    </div>
  );
};

export default InfoItem;
