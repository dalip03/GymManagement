
import React from "react";
// import lg from '../img/lg.png'

import '../Asset/css/style.css';
import '../Asset/css/barfiller.css';
import '../Asset/css/bootstrap.min.css';
import '../Asset/css/flaticon.css';
import '../Asset/css/font-awesome.min.css';
import '../Asset/css/magnific-popup.css';
// import '../Asset/css/owl.carousel.min.css';
import '../Asset/css/slicknav.min.css';

import img from '../Asset/img/hero/hero-1.jpg'
import Navbar from "./Navbar";
import Footer from "./footer";
import GetInTouch from "./getInTouch";

function Contact() {

  return (   
  <>

<Navbar/>

{/* <!-- Contact Section Begin --> */}
    <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title contact-title">
                        <span>Contact Us</span>
                        <h2>GET IN TOUCH</h2>
                    </div>
                    <div class="contact-widget">
                        <div class="cw-text">
                            <i class="fa fa-map-marker"></i>
                            <p>333 Middle Winchendon Rd, Rindge,<br/> NH 03461</p>
                        </div>
                        <div class="cw-text">
                            <i class="fa fa-mobile"></i>
                            <ul>
                                <li>125-711-811</li>
                                <li>125-668-886</li>
                            </ul>
                        </div>
                        <div class="cw-text email">
                            <i class="fa fa-envelope"></i>
                            <p>Support.gymcenter@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="leave-comment">
                        <form action="#">
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Website"/>
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/place/Khera's+Fitness+Freak/@30.893723,75.8173559,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOlsJIa0o25ZzZklfmxXNvxbmvNi4fcJNhCM024!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOlsJIa0o25ZzZklfmxXNvxbmvNi4fcJNhCM024%3Dw224-h298-k-no!7i3036!8i4048!4m7!3m6!1s0x391a83d1ebc06b27:0x49e3451fd62c77!8m2!3d30.893723!4d75.8173559!14m1!1BCg0KCS9tLzAxNnl4NzAB"
                    height="550" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </div>
    </section>
    {/* <!-- Contact Section End --> */}
    <GetInTouch/>
<Footer/>
  </>

  );   
}

export default Contact;
