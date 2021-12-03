import React from 'react'
import { Box, makeStyles, Typography } from "@material-ui/core";

import pic1 from "../../images/pic1.jpeg";

const useStyle = makeStyles((theme) => ({
  main_box: {
    width: "100%",
    height: "80vh",
    
    display: "flex",
  },
  cf1: {
    width: "50%",
    height: "100%",
   

    background: `URL(${pic1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "50vw 100vh",
  },
  cf2: {
    width: "50%",
    height: "100%",
    
    background: `URL(${pic1})`,
    backgroundAttachment: "fixed",
    // backgroundSize: "100vw 100vh",
    backgroundSize: "50vw 100vh",
  },
}));
export default function Achivements() {
    const classes = useStyle();
    return (
      <div>
            <Box className={classes.main_box}>
                
          <Box className={classes.cf1}></Box>
          <Box className={classes.cf2}></Box>
        </Box>
      </div>
    );
}
