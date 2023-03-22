import React from 'react';

//Import Components
import BookACar from './bookacar';
import RentalFleet from './vehicleshomepage';
import WhyUsBanner from './whyusbanner';
import HomePageTestimonials from './homepagetestimonials';
import HomePageFAQ from './homepageFAQ';
import DownloadAppSection from './downloadappsection';
import Footer from '../footer/footer';

//Import stylesheet
import "./homepage.css";

const HomePage = () => {
    return (
        <section className='home-page-container'>
            <img className="background-hero-image" src="#" />
            <img className='background-hero-car-image' src="#" />
            <div className='home-page-hero-banner'>
                <div className='home-page-hero-banner-text-container'>
                    <h4>Plan your trip now</h4>
                    <h1>Save <span>big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                </div>
                <div className='home-page-hero-banner-buttons-container'>
                    <button className='orange-button'>Book Ride<i></i></button>
                    <button className='black-button'>Learn More<i></i></button>
                </div>
            </div>
            <BookACar />
            <div className='plan-your-trip-banner-container'>
                <h3>Plan your trip now</h3>
                <h2>Quick & easy car rental</h2>
                <div className='plan-your-trip-boxes-container'>
                    <div className='trip-banner-boxes'>
                        <img src="#" alt="car logo" />
                        <h3>Select a car</h3>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                    </div>
                    <div className='trip-banner-boxes'>
                        <img src="#" alt="Operator on phone image" />
                        <h3>Contact operator</h3>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                    </div>
                    <div className='trip-banner-boxes'>
                        <img src="#" alt="Car moving image" />
                        <h3>Let's Drive</h3>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                    </div>
                </div>
            </div>
            <RentalFleet />
            <div className='sales-banner'>
                <h2>Save big with our cheap car rental</h2>
                <p>Top Airports. Local suppliers. <span>24/7</span> Support.</p>
            </div>
            <WhyUsBanner />
            <HomePageTestimonials />
            <HomePageFAQ />
            <DownloadAppSection />
            <Footer />
        </section>
    )
};

export default HomePage;