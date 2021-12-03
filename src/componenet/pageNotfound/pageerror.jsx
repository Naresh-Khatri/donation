import React from 'react'
import { Box, makeStyles } from '@material-ui/core';


const useStyle = makeStyles((them) => ({
  main_box: {
    width: "99%",
    height: "99%",
    backgroundColor: "white",
    marginTop: "200px",
    position: "absolute",
    top: "-200px",
    zIndex: "200",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capatlize",
  },

  h1: {
    fontSize: "45px",
    width: "40%",
    height: "30%",
    // border: "2px solid black",
    boxShadow: "0px 0px 20px rgb(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10%",
    wordSpacing: "6px",
    letterSpacing: "1px",
  },
}));
export default function Pageerror() {
    const classes = useStyle();
    return (
        <div>
            <Box className={`${classes.main_box}  ${classes.sec}`}>
                <h1 className={classes.h1}>ERROR PAGE</h1>
              
          </Box>
        </div>
    )
}
