import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";

import pic1 from "../../images/1.jpeg";
import pic2 from "../../images/2.jpeg";
import pic3 from "../../images/3.jpeg";
import pic4 from "../../images/4.jpeg";

import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const usestyle = makeStyles({
  slider: {
    position: "relative",
    height: "40vmax",

    width: "98vw",

    overflow: "hidden",

    margin: "0 auto",
  },
  slider_img: {
    width: "100%",
    display: "flex",
      height: "100%",
      flexWrap: "no-wrap",
    
    flexDirection: "row",
    transition: "1s linear",
  },
  image: {
    width: "100%",
  },
  leftarrow: {
    position: "absolute",
    top: "50%",
    left: "32px",
    fontSize: "20px",
    height: ["3em", "!important"],
    color: "red",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
    width: [66, "!important"],
  },
  rightarrow: {
    position: "absolute",
    top: "50%",
    height: ["3em", "!important"],
    right: "32px",
    fontSize: "20px",
    color: "red",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",

    width: [66, "!important"],
  },
});
export default function Image_slider() {
  const image_slider = useRef(null);
  const classes = usestyle();
  const [image, setimage] = useState(null);

  // let initail_img = document.querySelector("#img_slider");

  useEffect(() => {
    setInterval(() => {
      if (image_slider) {
        // nextSlide();
      }
    }, 5000);
  });
  let var1 = 0;
  const nextSlide = () => {
    var1 < 98 * 2 ? (var1 = var1 + 98) : (var1 = 0);
    // setstate(var1);

    image_slider.current.style.transform = `translateX(-${var1}vw)`;
  };

  const preSlide = () => {
    var1 === 0 ? (var1 = var1 + 98 * 2) : (var1 = var1 - 98);

    document.querySelector(
      "#img_slider"
    ).style.transform = `translateX(-${var1}vw)`;
  };

  // onClick = { nextSlide };
  // onClick = { preSlide };
  return (
    <>
      <Box className={classes.slider}>
        <ArrowLeft className={classes.leftarrow} />
        <ArrowRight className={classes.rightarrow} />

        <Box className={classes.slider_img} id="img_slider" ref={image_slider}>
          <img
            src="https://images.outlookindia.com/public/uploads/gallery/20170727/cover_story_1_20170807.jpg"
            alt="err"
            className={classes.image}
            id="img1"
          />
          <img src={pic2} alt="err" className={classes.image} id="img1" />
          <img src={pic3} alt="err" className={classes.image} id="img1" />
        </Box>
      </Box>
    </>
  );
}
