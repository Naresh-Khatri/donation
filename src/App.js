import React from 'react'
import About from './componenet/About Us/about'
import Navbar from './componenet/navBar/Navbar'
import { Box } from '@material-ui/core';
import Home from './componenet/Home/Home';
import Contact from './componenet/contact/Contact';
import Donate from './componenet/Donation/Donate';
import Pageerror from './componenet/pageNotfound/pageerror';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './componenet/footer/Footer';
import Team from './componenet/ourTeam/Team';


export default function App() {
    return (
      <Router>
        <Navbar />

        <Box style={{ marginTop: "85px" }}>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />

            <Route exact path="/team" element={<Team/>} />
            <Route exact path="/donate" element={<Donate />} />
            <Route path="*" element={<Pageerror />} />
          </Routes>
          <Contact />
          <Footer/>
        </Box>
      </Router>
    );
}
