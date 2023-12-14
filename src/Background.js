import React from "react";
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
  );
};

export default BackgroundPic;
