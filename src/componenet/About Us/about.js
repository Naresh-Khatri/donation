

import {Box,makeStyles,} from "@material-ui/core";
import React from 'react'
import Contact from "../contact/Contact";
import Achivements from "./Achivements";
import Banner from './banner'
import ImageCard from './Card'

import { cards } from './Cardcontenet';


const useStyle = makeStyles((them) => ({
    imageCard_box: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
 
    }
}));
export default function About() {
    const classes = useStyle();

    const { card1, card2, card3, card4 } = cards;

    return (
      <div>
        <Banner />
        <Box className={classes.imageCard_box}>
          <ImageCard  cards={card1} />
          <ImageCard  cards={card2}/>
          <ImageCard cards={card3} />
          <ImageCard  cards={card4}/>
            </Box>
            <Achivements />
           
      </div>
    );
}
