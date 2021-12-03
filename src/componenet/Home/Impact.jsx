import { Box, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react'
import pic1 from "../../images/1.jpeg";

const useStyle = makeStyles((theme) => ({
  link: {
    width: "100px",
    textAlign: "center",
    textDecoration: "none",
    color: "white",
    fontWeight: "bolder",
    cursor: "pointer",
    display: "inline-block",
    // margin: "0 10px",
    padding: "10px 0",
    border: "2px solid white",
    transitionProperty: "all",
    transitionDuration: "0.8s",
    // position: "relative",
    zIndex: "1",
    fontStyle: "italic",
    fontSize: "17px",
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
  main_box: {
    width: "300px",
    height: "250px",
    margin: "20px",
    position: "relative",
    boxShadow: "0px 0px 20px rgb(0,0,0,0.5)",
    // background:"rgb(0,0,0)"
    [theme.breakpoints.down("sm")]: {
      width: "99%",
      height: "450px",
    },
  },
  inner_box: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
      //   color: "rgb(0, 0, 0)",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    opacity: "10",
    
  },
  text_box: {
    position: "absolute",
    top: "0px",
    left: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    background: "rgb(0,0,0,0.5)",
    color: "white",
  },
}));
export default function Impact({props}) {
    const classes = useStyle();
    console.log(props);
    const { h1,image} = props;
    return (
      <>
        <Box className={classes.main_box}>
          <Box className={classes.inner_box}>
            <img src={image} alt="" className={classes.img} />
            <Box className={classes.text_box}>
              <h1>{h1}</h1>
              <Link exact to="/donate" className={classes.link}>
                <span className={classes.spn}></span>Donate Now
              </Link>
            </Box>
          </Box>
        </Box>
      </>
    );
}
