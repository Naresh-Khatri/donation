import { Link } from "react-router-dom";
import React from "react";

import { Typography, Box, makeStyles } from "@material-ui/core";
import {
  Facebook,
  Instagram,
  Twitter,
  CloseOutlined,
  MenuOutlined,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  nav: {
    background: "#000",
    position: "fixed",
    top: "0px",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    width: "99%",
    zIndex: "100",
    [theme.breakpoints.down("sm")]: {     
      width: "97%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "96%",
    },
  },
  link: {
    display: "inline-block",
    padding: "15px",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#fff",
    fontSize: "1.2rem",
    wordSpacing: "4px",
    "&:hover": {
      // background: "rgb(255,94,0)",
      background: "grey",
    },
  },

  mainMenu: {
    display: "flex",
    alignItems: "center",
    //   justifyContent:"f"
  },
  openMenu: {
    fontSize: "2rem",
    margin: "20px",
    display: "none",
    cursor: "pointer",
  },
  closeMenu: {
    fontSize: "2rem",
    display: "none",
    cursor: "pointer",
  },
  fb: {
    color: "rgb(0, 110, 255)",
    fontSize: "2rem",
    display: "none",
    cursor: "pointer",
  },
  insta: {
    color: "rgb(86, 154, 243)",
    fontSize: "2rem",
    display: "none",
    cursor: "pointer",
  },
  twitter: {
    color: " rgb(255, 0, 191)",
    fontSize: "2rem",
    display: "none",
    cursor: "pointer",
  },
  logo: {
    margin: "6px",

    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    mainMenu: {
      height: "400px",
      position: "fixed",
      top: "0",
      right: "0",
      left: "0",
      zIndex: "10",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      transition: "top 1s ease",
      display: "none",
    },
    closeMenu: {
      display: "block",
      position: "absolute",
      top: "20px",
      left: "20px",
    },
    openMenu: {
      display: "block",
    },
    link: {
      display: "inline-block",
      "&:hover": {
        background: "none",
        color: "rgb(255, 123, 0)",
        fontSize: "1.6rem",
      },
    },
    cmn_ico: {
      display: "inline-block",
      padding: "12px",
    },
  },
  donate: {
    color: "white",
    background: "rgb(255,94,0)",
    marginLeft: "20px",
    fontWeight: "bold",
  },
  h1: {
    wordSpacing: "5px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
}));
export default function Navbar() {
  const classes = useStyle();
 
  const show = () => {
    let mainMenu = document.getElementById("mainMenu");
  
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  };
  const close = () => {
    let mainMenu = document.getElementById("mainMenu");
    mainMenu.style.top = "-100%";
  };
  return (
    <>
      <Box className={classes.nav}>
        <Box className={classes.logo}>
          <Link exact to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 className={classes.h1}>WORLD EK UDAAN</h1>
          </Link>
        </Box>
        <Box className={classes.openMenu}>
          <MenuOutlined onClick={show} />
        </Box>
        <Box className={classes.mainMenu} id="mainMenu">
          <Typography>
            <Link exact to="/" className={classes.link} onClick={close}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link exact to="/about" className={classes.link} onClick={close}>
              About us
            </Link>
          </Typography>
          <Typography>
            <Link exact to="/team" className={classes.link} onClick={close}>
              governing body
            </Link>
          </Typography>
          <Typography>
            <Link
              exact
              to="/donate"
              className={`${classes.link} ${classes.donate}`}
              onClick={close}
            >
              Donate now
            </Link>
          </Typography>
          <Box className={classes.closeMenu}>
            <CloseOutlined onClick={close} />
          </Box>
          <span className={classes.icons}>
            <Facebook className={`${classes.fb} ${classes.cmn_ico}`} />
            <Instagram className={`${classes.insta} ${classes.cmn_ico}`} />
            <Twitter className={`${classes.twitter} ${classes.cmn_ico}`} />
          </span>
        </Box>
      </Box>
    </>
  );
}
