import React from "react";
import "./case.css";
import pic from "../../Assests/photo.png";
import Pin from "../../Assests/pin.png";

function CaseFavorite  () {
  return (
    <div className="case-favorite">
      <h1 className="title">
        <span className="icon">
            <img src={Pin} alt="pin"/></span> Case Favorite
      </h1>
      <hr class="custom-line"></hr>

      <div className="card">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
      <div className="card">
        <div className="photo-icon">
            <img src={pic} alt="photo-image"/> </div> Photo
      </div>
      <div className="card">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
    </div>
  );
};

export default CaseFavorite;