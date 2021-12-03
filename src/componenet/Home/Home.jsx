import React from 'react'
import Image_slider from './Imageslider'
import Banner from './Banner'
import Impact from './Impact'
import { Box, makeStyles } from '@material-ui/core';
import { impact_cards } from './impact_constant';

const useStyle = makeStyles((theme) => ({
  inner_box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  h1: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    borderBottom: "3px solid rgb(255,94,0)",
  },
  impact_box: {
    display: "flex",
    alignItems: "center",
      justifyContent: "space-evenly",
      flexDirection:"column",
    
  },
}));
export default function Home() {
    const classes = useStyle();
    const { card1, card2, card3, card4, card5, card6,card7,card8} = impact_cards;
    return (
      <div>
        <Banner />
        <Box className={classes.impact_box}>
          <h1 className={classes.h1}>WE HELPS IN </h1>
          <Box className={classes.inner_box}>
            <Impact props={card1}/>
            <Impact props={card2}/>
            <Impact props={card3}/>
            <Impact props={card4}/>
            <Impact props={card5}/>
            <Impact props={card6}/>
            <Impact props={card7}/>
            <Impact props={card8}/>
          </Box>
        </Box>
      </div>
    );
}
