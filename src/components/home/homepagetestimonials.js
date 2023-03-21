import React from "react";

import './bookacar.css';

const HomePageTestimonials = () => {
    return (
        <section className="home-page-testimonials-container">
            <div>
                <h3>Reviewed by People</h3>
                <h2>Client's Testimonials</h2>
                <p>Discover the positive impact we've made on the our clients by reading through their testimonials.
                    Our clients have experienced our service and results,
                    and they're eager to share their positive experiences with you.</p>
            </div>
            <div>
                <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                <div>
                    <img src="#" alt="Profile photo" />
                    <div>
                        <h3>Person Name</h3>
                        <h5>City</h5>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HomePageTestimonials;