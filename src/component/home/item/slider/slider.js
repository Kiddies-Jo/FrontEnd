import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Grid, IconButton } from "@mui/material";
import { images } from "./images";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const PrevNextImages = (direction) => {
    if (direction === "next") {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    } else if (direction === "prev") {
      setCurrentImage((prevImage) =>
        prevImage === 0 ? images.length - 1 : prevImage - 1
      );
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      PrevNextImages("next");
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <Grid item container justifyContent={"center"} paddingTop={'4rem'} paddingBottom={'4rem'}> 
    <div style={{ position: "relative", width: "50%", height: "350px" , justifyContent:'center'}}>
      <IconButton
        style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}
        onClick={() => PrevNextImages("prev")}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <img
        src={images[currentImage]}
        width={"100%"}
        height={"100%"}
        alt="current"
        style={{ borderRadius: "40px" }}
      />
      <IconButton
        style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}
        onClick={() => PrevNextImages("next")}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </div>
    </Grid>
  );
};

export default ImageSlider;
