import { Box, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CallMissedSharp } from "@material-ui/icons";
import React from "react";
import pic1 from "../../images/1.jpeg";

const useStyle = makeStyles((theme) => ({
  main_box: {
    background: `URL(https://images.outlookindia.com/public/uploads/gallery/20170727/cover_story_1_20170807.jpg)`,

    backgroundAttachment: "fixed",
    backgroundSize: "100vw 100vh",
    width: "100%",
    height: "50vh",
    [theme.breakpoints.down("xs")]: {
      height: "120vh",
    },
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
}));
export default function TeamBanner() {
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.main_box}>
        <Box className={classes.main}>
          <h1 className={classes.h1}>Governing Body</h1>
        </Box>
      </Box>
     
    </div>
  );
}
