
import { Box, makeStyles, Typography } from "@material-ui/core";
import React from 'react';




const useStyle = makeStyles((theme) => ({
  main_box: {
    position: "relative",
    width: "45vmax",
    height: "500px",

    boxShadow: "0px 0px 20px rgb(0,0,0,0.7)",
    margin: "40px 0px",
    lineHeight: "20px",
    [theme.breakpoints.down("md")]: {
      width: "90vw",
      height: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      // width: "90vw",
      // height: "500px",
    },
  },
  inner_box: {
    transitionProperty: "all",
    transitionDuration: "1s",
  },
  image: {
    width: "100%",
    height: "100%",
    
  },

  outer_box: {
    width: "100%",
    height: "100%",

    position: "absolute",
    top: 0,
    transitionProperty: "all",
    transitionDuration: "1s",

    backgroundColor: "rgb(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover > *": {
      backgroundColor: "rgb(0,0,0,0.6)",
    },
    "&:hover": {
      backgroundColor: "rgb(0,0,0,0.1)",
    },
  },
  text: {
    textAlign: "center",
    zIndex: "10",
    color: "white",
  },
  para_box: {
    // visibility:"none",
    // display: "none",
    // transform: "translateX(-1000px)",
    // transitionDuration: "1s",
    width: "100%",
    // border: "1px solid black",
  },
  //     inner_box:{

  //   }
}));
export default function ImageCard({cards}) {
    const classes = useStyle();
    const { h1, p, image } = cards;
    return (
      <Box>
        <Box className={classes.main_box}>
          <img src={image} alt="" className={classes.image} />
          <Box className={classes.outer_box}>
          
            <Box className={classes.inner_box}>
              <h1 className={classes.text}>{h1}</h1>
              <Box className={classes.para_box}>
                <Typography className={classes.text}>{p}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
}
