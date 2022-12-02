import React from 'react'
import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
// import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import Navbar from './Navbar';
import Footer from './footer';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Plans from './Plans';
import Gallery from './Gallery';
import Classes from './Classes';
import Index from './Index';
import Services from './Services';
import Team from './Team';

function Home(){
    return(
       

         <>
          <Index/>
          <Plans/>
          <Classes/>
          <Gallery/>
          <AboutUs/>
          <Team/>
          {/* <Contact/> */}
          <Services/>
</>

    );
}

export default Home;