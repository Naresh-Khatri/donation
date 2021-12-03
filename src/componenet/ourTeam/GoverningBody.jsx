import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import React from "react";
import pic1 from "../../images/2.jpeg";

const useStyle = makeStyles((theme) => ({
  team_box: {
    margin: "20px 0",
    display: "grid",
    gridTemplateColumns: "0.5fr 1fr",
    gridTemplateRows: "1fr",
margin:"40px 0",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: " 1fr",
    },
  },
  img_box: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "200px",
    borderRadius: "50%",
    cursor: "pointer",
    width: "200px",
  },
  post: {
    margin: "-20px 0px 20px 0px",
    fontWeight: "bold",
  },
  name: {
    display: "inline-block",
    textAlign: "center",
  },
  team_banner: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  h1: {
    color: "#d94b38",
    fontSize: "35px",
  },
    about: {
        //   textAlign: "center",
  }
}));
export default function GoverningBody({ props }) {
    const {name,image,post,about } = props;
  const classes = useStyle();
  return (
    <div>
      <Box className={classes.team_box}>
        <Box className={classes.img_box}>
          <img src={image} alt="" className={classes.image} />
        </Box>
        <Box className={classes.team_banner}>
          <Box className={classes.name}>
            <h1 className={classes.h1}>{name}</h1>
            <Typography className={classes.post}>{post}</Typography>
          </Box>

          <Typography className={classes.about}>
       {about}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
