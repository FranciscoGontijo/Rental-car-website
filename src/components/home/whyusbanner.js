import React from "react";

const WhyUsBanner = () => {
    return (
        <section className="why-choose-us-container">
            <img src="#" />
            <div className="why-choose-us-banner">
                <h3>Why Choose Us</h3>
                <h2>Best valued deals you will ever find</h2>
                <p>Discover the best deals you'll ever find with our unbeatable offers.
                    We're dedicated to providing you with the best value for your money,
                    so you can enjoy top-quality services and products without breaking the bank.
                    Our deals are designed to give you the ultimate renting experience,
                    so don't miss out on your chance to save big.</p>
            </div>
            <button className="why-choose-us-button">Find Details</button>
            <div className="why-choose-us-boxes-container">
                <div className="why-choose-us-boxes">
                    <img src="#" alt="car image" />
                    <h3>Cross country drive</h3>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
                <div className="why-choose-us-boxes">
                    <img src="#" alt="money image" />
                    <h3>All Inclusive pricing</h3>
                    <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
                <div className="why-choose-us-boxes">
                    <img src="#" alt="hands holding a coin image" />
                    <h3>No hidden charges</h3>
                    <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
            </div>

        </section>
    )
};

export default WhyUsBanner;