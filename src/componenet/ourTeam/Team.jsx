import React from 'react'
import GoverningBody from './GoverningBody'
import TeamBanner from './TeamBanner'
import { team_cards } from './teamConstant';
export default function Team() {
 const { card1, card2, card3, card4, card5} = team_cards;
  return (
    <div>
      <TeamBanner />
      <GoverningBody props={card1}/>
      <GoverningBody props={card2}/>
      <GoverningBody props={card3}/>
      <GoverningBody props={card4}/>
      <GoverningBody props={card5}/>
    </div>
  );
}

