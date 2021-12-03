import React from 'react'
import { Box, makeStyles,Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Facebook } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/styles';
const useStyle = makeStyles((theme) => ({
  main_box: {
    width: "100%",
    // height: "10vmax",
    background: "#d94b38",
    color: "#f9f9f9",
    textAlign: "center",
  },
  copywright: {
    width: "90%",
    // height: "20px",
    margin: "0 auto",
    background: "white",
    boxShadow: "0px 0px 20px rgb(0,0,0,0.5)",
    color: "black",
    // padding:"4px 0px",
    marginTop: "20px",
  },
  spn: {
    fontWeight: "bold",
  },
  typography: {
    wordSpacing: "5px",
    letterSpacing: "1px",
  },
}));
export default function Footer() {
    const classes = useStyle();
    return (
      <>
        <Box className={classes.main_box}>
          <h3>Disclaimer</h3>
          <Typography>
            No third party agency is working on behalf of World ek Udaan for any
            recruitment, trainings, camps or other activities related to World
            ek Udaan. Please check/consult with World ek Udaan directly to get
            correct information or assistance. Please beware of any unwarranted
            claims made by anyone on our behalf. Kindly bring any such claims to
            our notice for immediate attention and action. World ek Udaan
            doesn't charge any money from anyone for these activities. So if you
            come across any individual/ organization making a monetary demand in
            our name please bring it to our notice immediately on mail@goonj.org
          </Typography>
          <Box className={classes.copywright}>
            <Typography className={classes.typography}>
              DESIGNED AND DEVELOPED BY
              <span className={classes.spn}> PIYUSH THAKUR</span>
            </Typography>
          </Box>
        </Box>
      </>
    );
}
