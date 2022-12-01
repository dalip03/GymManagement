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
import logo1 from '../Asset/img/logo.png'
import hero from '../Asset/img/hero/hero-2.jpg'
import class1 from '../Asset/img/classes/class-1.jpg'
import class2 from '../Asset/img/classes/class-2.jpg'
import class3 from '../Asset/img/classes/class-3.jpg'
import class4 from '../Asset/img/classes/class-4.jpg'
import class5 from '../Asset/img/classes/class-5.jpg'

import gallery1 from '../Asset/img/gallery/gallery-1.jpg'
import gallery2 from '../Asset/img/gallery/gallery-2.jpg'
import gallery3 from '../Asset/img/gallery/gallery-3.jpg'
import gallery4 from '../Asset/img/gallery/gallery-4.jpg'
import gallery5 from '../Asset/img/gallery/gallery-5.jpg'

import team1 from '../Asset/img/team/team-1.jpg'
import team2 from '../Asset/img/team/team-2.jpg'
import team3 from '../Asset/img/team/team-3.jpg'
import team4 from '../Asset/img/team/team-4.jpg'
import team5 from '../Asset/img/team/team-5.jpg'
import team6 from '../Asset/img/team/team-6.jpg'


import img from '../Asset/img/hero/hero-1.jpg'
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
          <Navbar />
          <Index/>
          <Plans/>
          <Classes/>
          <Gallery/>
          <AboutUs/>
          <Team/>
          {/* <Contact/> */}
          <Services/>

          <Footer/>
</>

    );
}

export default Home;