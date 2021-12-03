import React from 'react'
import { Box, makeStyles, Typography } from "@material-ui/core";
import { LocationOnOutlined, EmailOutlined,PhoneAndroidOutlined,Facebook } from "@material-ui/icons";


const useStyle = makeStyles((theme) => ({
  main_box: {
    margin: "40px 0px",
    marginTop: "20px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  inner_box: {
    cursor: "pointer",
    height: "290px",
    width: "290px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    border: "1px solid grey",
    margin: "20px 0",
    boxShadow: "0px 0px 20px rgb(0 0 0 / 40%)",
    [theme.breakpoints.down("xs")]: {
      // height: "50px",
      width: "99%",
      // flexDirection: "row",
    },
  },
  icon: {
    color: "#d94b38",
    fontSize: "50px",
  },
  h1: {
    // textAlign: "center",
    display: "inline-block",

    borderBottom: "3px solid rgb(255,94,0)",
  },
  heading: {
    textAlign: "center",
    // display: "inline-block",
  },
  spn: {
    fontWeight: "bold",
    display: "inline-block",
    marginLeft: "7px",
  },
}));
export default function Contact() {
    const classes = useStyle();
    return (
      <div>
        <Box className={classes.heading}>
          <h1 className={classes.h1}>Get In Touch</h1>
        </Box>

        <Box className={classes.main_box}>
          <Box className={classes.inner_box}>
            <LocationOnOutlined className={classes.icon} />
            <Typography>
              Address :-{" "}
              <span className={classes.spn}>
              
                DDA Flat House No.98D,Pocket D2, Old Kondli Mayur
                Vihar,Delhi,India 110096
              </span>
            </Typography>
          </Box>

          <Box className={classes.inner_box}>
            <EmailOutlined className={classes.icon} />
            <Typography>
              Email :-
              <span className={classes.spn}>ddsharma19721972@gmail.com</span>
            </Typography>
          </Box>

          <Box className={classes.inner_box}>
            <PhoneAndroidOutlined className={classes.icon} />
            <Typography>
             Number :-
              <span className={classes.spn}> 9773530885</span>
            </Typography>
          </Box>

          <Box className={classes.inner_box}>
            <Facebook className={classes.icon} />
            <Typography>facebook:-</Typography>
          </Box>
        </Box>
      </div>
    );
}
