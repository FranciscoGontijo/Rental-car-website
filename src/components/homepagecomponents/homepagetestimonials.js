import React from "react";

import './homepagetestimonials.css';

const HomePageTestimonials = () => {
    return (
        <section className="home-page-testimonials-container">
            <div className="home-page-testemonials-banner">
                <h3>Reviewed by People</h3>
                <h2>Client's Testimonials</h2>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials.
                    Our clients have experienced our service and results,
                    and they're eager to share their positive experiences with you.</p>
            </div>
            <div className="testimonials-boxes-container">
                <div className="testimonials-boxes">
                    <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    <div className="testimonials-boxes-profile-container">
                        <img src="#" alt="Profile photo" />
                        <div className="testimonials-boxes-name-container">
                            <h4>Person Name</h4>
                            <p>City</p>
                        </div>
                    </div>
                </div>
                <div className="testimonials-boxes second-testimonial">
                <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>
                    <div className="testimonials-boxes-profile-container">
                        <img src="#" alt="Profile photo" />
                        <div className="testimonials-boxes-name-container">
                            <h4>Person Name</h4>
                            <p>City</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomePageTestimonials;