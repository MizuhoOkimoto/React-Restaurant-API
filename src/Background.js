import React from "react";
import "./App.css";
import "./Restaurants";
import { Card } from "react-bootstrap";

const BackgroundPic = () => {
  // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  return (
    <Card.Img
      variant="top"
      src="top_img.jpg"
      style={{ width: "100%", height: "auto", marginBottom: "20px" }}
    />

    // <div className="backgroundPic" style={{ backgroundImage: `url(${imageUrl})` }}>
    //   <div className="background-content">
    //     <h1>Pineapples</h1>
    //     <p>They are good</p>
    //   </div>
    // </div>
  );
};

export default BackgroundPic;
