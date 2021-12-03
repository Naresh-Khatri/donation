import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CallMissedSharp } from '@material-ui/icons'
import React from 'react'
import pic1 from "../../images/poor1.jpg";

const useStyle = makeStyles((theme) => ({
  main_box: {
    // background: `URL(https://images.outlookindia.com/public/uploads/gallery/20170727/cover_story_1_20170807.jpg)`,
    background: `URL(${pic1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "100vw 100vh",
    width: "100%",
    height: "90vh",
    [theme.breakpoints.down("xs")]: {
      height: "135vh",
    },
  },
  banner_btn: {
    margin: "70px 0",
    display: "flex",
    flexWrap: "wrap",
    //   alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    width: "150px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bolder",
    cursor: "pointer",
    display: "inline-block",
    margin: "0 10px",
    padding: "20px 0",
    border: "2px solid white",
    transitionProperty: "all",
    transitionDuration: "0.8s",
    // position: "relative",
    zIndex: "1",
    fontStyle: "italic",
    fontSize: "25px",
    "&:hover > *": {
      width: "100%",
      background: "rgba(255, 253, 253, 0.7)",
    },
    "&:hover": {
      transform: "translateX(10px)",
      color: "rgb(0, 0, 0)",
    },
  },
  spn: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "0",
    height: "100%",

    transitionProperty: "all",
    transitionTimingFunction: "linear",
    transitionDuration: "1s",
    zIndex: "-1",
  },
  main: {
    width: "100%",
    height: "100%",
    background: "rgb(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    flexDirection: "column",
  },
  h1: {
    fontStyle: "italic",
    fontSize: "65px",
    lineHeight: "none",
    borderBottom: "3px solid white",
    wordSpacing: "6px",
    letterSpacing: "1px",
  },
  h3: {
    fontStyle: "italic",
    fontSize: "30px",
    lineHeight: "none",
    borderBottom: "3px solid white",
    wordSpacing: "6px",
    letterSpacing: "1px",
    margin: "-10px 0",
  },
  p: {
    margin: "30px 0",
    fontSize: "20px",
    lineHeight: "29px",
    wordSpacing: "4px",
    letterSpacing: "1px",
  },
}));
export default function Banner() {
    const classes = useStyle();
    return (
      <div>
        <Box className={classes.main_box}>
          <Box className={classes.main}>
            <h1 className={classes.h1}>Welcome To World Ek Udaan</h1>
            <h3 className={classes.h3}>Together we will make a difference</h3>
            <p className={classes.p}>
              We aims to build an equitable relationship of
              strength, sustenance and dignity between the cities and villages
              using the under-utilized urban material as a tool to trigger
              development with dignity, across the country
            </p>
            {/*  
            
            */}
            <Box class="banner_btn">
              <Link exact to="/donate" className={classes.link}>
                <span className={classes.spn}></span>Donate Now
              </Link>
              <Link exact to="/about" className={classes.link}>
                <span className={classes.spn}></span>Read More
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    );
}
