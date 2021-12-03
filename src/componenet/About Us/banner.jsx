
import {
  Box,
  makeStyles,
  
} from "@material-ui/core";
import React from 'react';
import pic1 from "../../images/3.jpeg";

const useStyle = makeStyles((theme) => ({
  image_box: {
    background: `URL(${pic1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "100vw 100vh",
    width: "100%",
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  h1: {
    color: "white",
    fontSize: "58px",
    backgroundColor: "rgb(0,0,0,0.6)",
    padding: "10px 20px",
    borderRadius: "10px",
  },
}));
export default function Banner() {
  const classes = useStyle();
  return (
    <>
      <Box>
        <Box className={classes.container}>
          <Box className={classes.image_box}>
            <h1 className={classes.h1}>About World Ek Udaan</h1>
          </Box>
        </Box>
      </Box>
    </>
  );
}

