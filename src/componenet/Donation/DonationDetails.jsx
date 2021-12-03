import React from 'react'
import { Box, makeStyles } from "@material-ui/core";

import pic4 from "../../images/qrcode.jpeg";

const useStyle = makeStyles((theme) => ({
  main_box: {
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    // height: "500px",
    width: "100%",
    justifyContent: "space-evenly",
    margin: "50px 0",
    flexWrap: "wrap",
    // flexDirection:"column"
  },
  netBanking_box: {
    // border: "1px solid black",
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "0 0 20px rgb(0,0,0,0.2)",

    [theme.breakpoints.down("md")]: {
      width: "99%",
      marginTop: "100px",
    },
    // position: "relative",
  },
  Scanner_box: {
    // border: "1px solid black",
    width: "400px",
    // height: "4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "0px 0px 15px rgb(0,0,0,0.2)",
    // boxShadow: "0 0 20px rgb(0,0,0,0.2)",
    [theme.breakpoints.down("md")]: {
      width: "99%",
    },

    // position: "relative",
  },
  image_box: {
    width: "395px",
    height: "395px",
    // border: "1px solid black",
    boxShadow: "0px 5px 5px rgb(0,0,0,0.2)",

    [theme.breakpoints.down("md")]: {
      width: "99%",
    },
    // [theme.breakpoints.down("xs")]: {
    //   width: "100%",
    // },
    // b
  },
  account_box: {
    width: "395px",
    height: "395px",
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    boxShadow: "0 0 20px rgb(0,0,0,0.5)",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  h1: {
      fontStyle: "italic",
      wordSpacing: "2px",
      letterSpacing: "1px",
      textTransform:"capitalize",
  },
  spn: {
    fontWeight: "bold",
    fontSize: "20px",
    wordSpacing: "2px",
    letterSpacing: "1px",
  },
}));
export default function DonationDetails() {
    const classes = useStyle();
    return (
      <div>
        <Box className={classes.main_box}>
          <Box className={classes.Scanner_box}>
            <Box className={classes.image_box}>
              <img src={pic4} alt="" className={classes.image_box} />
            </Box>
            <Box className={classes.h1_box}>
              <h1 className={classes.h1}>Scan here to donate</h1>
            </Box>
          </Box>
          <Box className={classes.netBanking_box}>
            <Box className={classes.account_box}>
              <h3 className={classes.h3}>
                Name :-
                <span className={classes.spn}>Piyush thakur</span>
              </h3>
              <h3 className={classes.h3}>
                Bank Name :-
                <span className={classes.spn}>State Bank of India</span>
              </h3>
              <h3 className={classes.h3}>
                Account No :-
                <span className={classes.spn}>12345678901</span>
              </h3>
              <h3 className={classes.h3}>
               IFSC :-
                <span className={classes.spn}>12345678901</span>
              </h3>
            </Box>
            <Box className={classes.h1_box}>
              <h1 className={classes.h1}> For net Banking</h1>
            </Box>
          </Box>
        </Box>
      </div>
    );
}
