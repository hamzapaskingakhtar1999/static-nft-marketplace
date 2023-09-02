import React from "react";
import "./Brands.css";

import Brand from "../../assets/Brandlogo.png";

const Brands = () => {
  return (
    <div className="brands">
      <img src={Brand} alt="Brand Logo" className="brand-logo" />
    </div>
  );
};

export default Brands;
