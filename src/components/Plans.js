import React from 'react'
import Footer from './footer';
import Navbar from './Navbar';
function Plans(){
    return(
        <>
        <Navbar/>
        {/* <!-- Pricing Section Begin --> */}
<section class="pricing-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <span>Our Plan</span>
                    <h2>Choose your pricing plan</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-8">
                <div class="ps-item">
                    <h3>Class drop-in</h3>
                    <div class="pi-price">
                        <h2>$ 39.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                    <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8">
                <div class="ps-item">
                    <h3>12 Month unlimited</h3>
                    <div class="pi-price">
                        <h2>$ 99.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                    <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-8">
                <div class="ps-item">
                    <h3>6 Month unlimited</h3>
                    <div class="pi-price">
                        <h2>$ 59.0</h2>
                        <span>SINGLE CLASS</span>
                    </div>
                    <ul>
                        <li>Free riding</li>
                        <li>Unlimited equipments</li>
                        <li>Personal trainer</li>
                        <li>Weight losing classes</li>
                        <li>Month to mouth</li>
                        <li>No time restriction</li>
                    </ul>
                    <a href="#" class="primary-btn pricing-btn">Enroll now</a>
                    <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Pricing Section End --> */}
        <Footer/>
        </>
    );
}

export default Plans;